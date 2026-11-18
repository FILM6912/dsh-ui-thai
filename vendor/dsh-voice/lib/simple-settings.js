// Minimal OpenAI-compatible voice settings. Secrets live only in Credentials records.
import { createHash, randomUUID } from 'node:crypto'
import { isTrustedCaller, readBody, writeJson } from './http-util.js'

export const SIMPLE_PROVIDER_KEY = 'dsh-ui-thai-openai'
export const SIMPLE_KEY_PREFIX = 'DSH_UI_THAI_VOICE_'
const CONTROL_FIELDS = { dictation: 'showDictationButton', message: 'showMessageButton', mode: 'showDictationModeButton', handsFree: 'showHandsFreeButton' }
const CONTROL_DEFAULTS = { dictation: true, message: false, mode: false, handsFree: true }
export class SimpleSettingsError extends Error {
  constructor(code, message, status = 400) { super(message); this.code = code; this.status = status }
}
const fail = (code, message, status) => { throw new SimpleSettingsError(code, message, status) }
export function normalizeBaseUrl(value) {
  if (typeof value !== 'string' || !value.trim() || value.length > 2048) fail('base_url', 'Enter a valid HTTP(S) API base URL.')
  let url
  try { url = new URL(value.trim()) } catch { fail('base_url', 'Enter a valid HTTP(S) API base URL.') }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) fail('base_url', 'Use HTTP(S) without credentials, query parameters or fragments.')
  return url.href.replace(/\/+$/, '')
}
export function simpleCredentialRef(baseUrl) {
  return SIMPLE_KEY_PREFIX + createHash('sha256').update(new URL(normalizeBaseUrl(baseUrl)).origin).digest('hex').toUpperCase()
}
export function simpleRecordKey(ref) {
  if (!new RegExp('^' + SIMPLE_KEY_PREFIX + '[A-F0-9]{64}$').test(ref)) fail('credential_ref', 'Invalid voice credential reference.')
  // CredentialKey's documented runtime form is <registered owner>/<id>.
  return 'dsh-ui-thai/voice-' + ref.slice(SIMPLE_KEY_PREFIX.length).toLowerCase()
}
export function activeSimpleProvider(config) {
  const first = config?.message?.chain?.[0]
  const key = typeof first === 'string' ? first : first?.provider
  const provider = (config?.customProviders || []).find(row => row.key === key && row.template === 'openai-transcriptions')
  if (!provider) return null
  try {
    return { ...provider, baseURL: normalizeBaseUrl(provider.baseURL), model: (typeof first === 'object' && first?.model) || provider.model || '' }
  } catch { return null }
}
function recordSecret(record, origin) {
  return record?.kind === 'grant' && record.payload?.origin === origin && typeof record.payload.apiKey === 'string' ? record.payload.apiKey : ''
}
export async function resolveSimpleCredential(credentials, ref, config) {
  if (!ref.startsWith(SIMPLE_KEY_PREFIX)) return undefined
  const candidates = (config?.customProviders || []).filter(row => row.keyEnv === ref)
  if (!candidates.length) return ''
  let origin
  try {
    const origins = candidates.map(row => new URL(normalizeBaseUrl(row.baseURL)).origin)
    if (origins.some(item => item !== origins[0]) || simpleCredentialRef(candidates[0].baseURL) !== ref) return ''
    origin = origins[0]
  } catch { return '' }
  const record = await credentials.readRecord(simpleRecordKey(ref))
  return recordSecret(record, origin)
}
function validateKey(payload) {
  if (payload.apiKey !== undefined && typeof payload.apiKey !== 'string') fail('api_key', 'API key must be text.')
  const key = (payload.apiKey || '').trim()
  if (key.length > 8192 || /[\r\n\0]/.test(key)) fail('api_key', 'API key contains invalid characters or is too long.')
  if (payload.clearApiKey !== undefined && typeof payload.clearApiKey !== 'boolean') fail('api_key', 'clearApiKey must be boolean.')
  if (key && payload.clearApiKey) fail('api_key', 'Choose a new API key or clear the key, not both.')
  return key
}
export function buildControlConfig(current, payload) {
  const next = { ...current }
  if (payload.hotkey !== undefined) {
    if (typeof payload.hotkey !== 'string' || payload.hotkey.length > 100 || /[\x00-\x1f]/.test(payload.hotkey)) fail('hotkey', 'Enter a valid keyboard shortcut, or clear it to disable.')
    next.hotkey = payload.hotkey.trim()
  }
  if (payload.controls !== undefined) {
    if (!payload.controls || typeof payload.controls !== 'object' || Array.isArray(payload.controls)) fail('controls', 'Composer controls must be an object.')
    for (const [field, configField] of Object.entries(CONTROL_FIELDS)) {
      if (payload.controls[field] === undefined) continue
      if (typeof payload.controls[field] !== 'boolean') fail('controls', 'Each composer control must be true or false.')
      next[configField] = payload.controls[field]
    }
  }
  return next
}
export function buildSimpleConfig(current, payload, keyEnv) {
  const baseUrl = normalizeBaseUrl(payload.baseUrl)
  if (typeof payload.model !== 'string' || !payload.model.trim() || payload.model.length > 256 || /[\x00-\x1f]/.test(payload.model)) fail('model', 'Select a model returned by the API.')
  const next = { ...buildControlConfig(current, payload), localOnly: false }
  const model = payload.model.trim()
  const provider = { key: SIMPLE_PROVIDER_KEY, template: 'openai-transcriptions', baseURL: baseUrl, model, keyEnv, prompt: '' }
  next.customProviders = [...(current.customProviders || []).filter(row => row.key !== SIMPLE_PROVIDER_KEY), provider]
  for (const mode of ['dictation', 'message']) next[mode] = { ...(current[mode] || {}), chain: [{ provider: SIMPLE_PROVIDER_KEY, model }] }
  return next
}

async function readModelsBody(response) {
  const limit = 2 * 1024 * 1024
  if (Number(response.headers?.get?.('content-length')) > limit) fail('models_response', 'The models API response is too large.', 502)
  if (!response.body?.getReader) {
    const text = await response.text()
    if (Buffer.byteLength(text) > limit) fail('models_response', 'The models API response is too large.', 502)
    return text
  }
  const reader = response.body.getReader()
  const chunks = []
  let size = 0
  try {
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      size += value.byteLength
      if (size > limit) { await reader.cancel(); fail('models_response', 'The models API response is too large.', 502) }
      chunks.push(Buffer.from(value))
    }
    return Buffer.concat(chunks).toString('utf8')
  } finally { reader.releaseLock() }
}

// Dependencies are explicit so tests can exercise real validation/persistence without a DSH runtime.
export function createSimpleSettingsService({ live, credentials, getSettingsService, NS = 'dsh-voice', validateConfig = value => value, fetchImpl = (...args) => fetch(...args), timeoutMs = 15000 }) {
  let writes = Promise.resolve()
  const settings = () => {
    const service = getSettingsService?.()
    if (!service || typeof service.describe !== 'function' || typeof service.replace !== 'function') fail('settings_unavailable', 'Voice settings cannot be saved in this profile.', 503)
    const row = service.describe().find(item => item.ns === NS)
    if (!row || typeof row.revision !== 'number') fail('settings_unavailable', 'Voice settings are not ready. Reload and try again.', 503)
    return { service, row }
  }
  const readProviderSecret = async (provider, config) => {
    if (!provider?.keyEnv) return ''
    if (provider.keyEnv.startsWith(SIMPLE_KEY_PREFIX)) return await resolveSimpleCredential(credentials, provider.keyEnv, config) || ''
    const hit = await credentials.resolve(provider.keyEnv)
    return typeof hit === 'string' ? hit : hit?.value || ''
  }
  const chooseKey = async (payload, baseUrl, config) => {
    const explicit = validateKey(payload)
    if (explicit) return { secret: explicit, keyEnv: simpleCredentialRef(baseUrl), explicit: true }
    if (payload.clearApiKey) return { secret: '', keyEnv: '', explicit: false }
    const provider = activeSimpleProvider(config)
    const secret = await readProviderSecret(provider, config)
    if (provider?.keyEnv && new URL(provider.baseURL).origin !== new URL(baseUrl).origin) fail('credential_origin', 'The saved API key belongs to a different server. Enter a new key or explicitly clear it.', 403)
    return { secret, keyEnv: provider?.keyEnv || '', explicit: false }
  }
  async function get() {
    const config = live()
    const provider = activeSimpleProvider(config)
    const { row } = settings()
    const key = await readProviderSecret(provider, config)
    return {
      ok: true, configured: !!provider, baseUrl: provider?.baseURL || '', apiKeySet: !!key,
      model: provider?.model || '', hotkey: config.hotkey || '',
      controls: Object.fromEntries(Object.entries(CONTROL_FIELDS).map(([field, configField]) => [field, config[configField] === undefined ? CONTROL_DEFAULTS[field] : config[configField] !== false])),
      revision: row.revision,
      warnings: provider ? [] : ['The current provider is not a custom OpenAI transcription API. Saving will select this API for both voice modes.'],
    }
  }
  async function saveNow(payload) {
    const current = live()
    const { service, row } = settings()
    if (!Number.isSafeInteger(payload.expectedRevision) || payload.expectedRevision !== row.revision) fail('conflict', 'Settings changed. Reload before saving.', 409)
    const active = activeSimpleProvider(current)
    const keyChanged = !!validateKey(payload) || payload.clearApiKey === true
    const baseValue = payload.baseUrl !== undefined ? payload.baseUrl : active?.baseURL || ''
    const modelValue = payload.model !== undefined ? payload.model : active?.model || ''
    const apiChanged = keyChanged || (payload.baseUrl !== undefined && baseValue !== (active?.baseURL || '')) || (payload.model !== undefined && modelValue !== (active?.model || ''))
    const baseUrl = apiChanged ? normalizeBaseUrl(baseValue) : active?.baseURL || ''
    const chosen = apiChanged ? await chooseKey(payload, baseUrl, current) : { explicit: false, keyEnv: active?.keyEnv || '', secret: '' }
    const next = validateConfig(apiChanged ? buildSimpleConfig(current, { ...payload, baseUrl, model: modelValue }, chosen.keyEnv) : buildControlConfig(current, payload))
    const changingRecord = chosen.explicit || (apiChanged && payload.clearApiKey && active?.keyEnv?.startsWith(SIMPLE_KEY_PREFIX))
    const ref = chosen.explicit ? chosen.keyEnv : active?.keyEnv
    const recordKey = changingRecord ? simpleRecordKey(ref) : null
    let previous, written
    if (recordKey) {
      const writeNonce = randomUUID()
      written = chosen.explicit ? { kind: 'grant', payload: { origin: new URL(baseUrl).origin, apiKey: chosen.secret, writeNonce } } : { kind: 'grant', payload: { origin: new URL(active.baseURL).origin, apiKey: '', writeNonce } }
      await credentials.modifyRecord(recordKey, old => { previous = old; return written })
    }
    try {
      await service.replace(NS, next, payload.expectedRevision)
    } catch {
      if (recordKey) {
        try {
          // Conditional rollback cannot overwrite a newer credential from another writer.
          await credentials.modifyRecord(recordKey, present => JSON.stringify(present) === JSON.stringify(written)
            ? (previous || { kind: 'grant', payload: { origin: written.payload.origin, apiKey: '' } }) : undefined)
        } catch { fail('rollback_failed', 'Settings were not saved and the credential rollback failed. Re-enter the key before trying again.', 500) }
      }
      fail('save_failed', 'Settings were not saved. Reload and try again.', 500)
    }
    return get()
  }
  async function models(payload) {
    const baseUrl = normalizeBaseUrl(payload.baseUrl)
    const { secret } = await chooseKey(payload, baseUrl, live())
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), timeoutMs)
    try {
      const response = await fetchImpl(baseUrl + '/models', {
        method: 'GET', headers: { Accept: 'application/json', ...(secret ? { Authorization: 'Bearer ' + secret } : {}) },
        signal: controller.signal, redirect: 'error',
      })
      if (!response.ok) fail('models_http', `The models API returned HTTP ${response.status}. Check the URL, key and server permissions.`, 502)
      const text = await readModelsBody(response)
      let data
      try { data = JSON.parse(text) } catch { fail('models_response', 'The models API did not return valid JSON.', 502) }
      if (!data || !Array.isArray(data.data)) fail('models_response', 'Expected an OpenAI-compatible models response with a data array.', 502)
      if (data.data.some(item => !item || typeof item.id !== 'string' || !item.id.trim() || item.id.length > 256 || /[\x00-\x1f]/.test(item.id))) fail('models_response', 'The models API returned an invalid model ID.', 502)
      return { ok: true, models: [...new Set(data.data.map(item => item.id))].sort().map(id => ({ id })) }
    } catch (error) {
      if (error instanceof SimpleSettingsError) throw error
      fail(controller.signal.aborted ? 'models_timeout' : 'models_network', controller.signal.aborted ? 'The models API timed out.' : 'Could not reach the models API. Check the URL, TLS certificate and network. Redirects are not followed.', 502)
    } finally { clearTimeout(timer) }
  }
  return { get, models, save(payload) { const result = writes.then(() => saveNow(payload)); writes = result.catch(() => {}); return result } }
}

export function registerSimpleSettingsRoutes(ctx, deps) {
  const service = createSimpleSettingsService({ ...deps, credentials: ctx.credentials })
  const register = (path, methods, action) => ctx.webServer.register({ kind: 'exact', path, handler: async (req, res) => {
    if (!methods.includes(req.method)) { writeJson(res, 405, { ok: false, error: { code: 'method', message: 'Method not allowed.' } }); return }
    if (!isTrustedCaller(req)) { writeJson(res, 403, { ok: false, error: { code: 'forbidden', message: 'Untrusted request origin.' } }); return }
    try {
      let payload = {}
      if (req.method !== 'GET') {
        try { payload = JSON.parse((await readBody(req, 32 * 1024)).toString('utf8')) } catch { fail('body', 'Request must contain a valid JSON object.') }
        if (!payload || typeof payload !== 'object' || Array.isArray(payload)) fail('body', 'Request must contain a JSON object.')
      }
      writeJson(res, 200, await action(req.method, payload))
    } catch (error) {
      const safe = error instanceof SimpleSettingsError ? error : new SimpleSettingsError('operation_failed', 'Voice settings operation failed. Check the credential store and try again.', 500)
      writeJson(res, safe.status, { ok: false, error: { code: safe.code, message: safe.message } })
    }
  } })
  const offs = []
  const dispose = () => { for (const off of offs.splice(0).reverse()) if (typeof off === 'function') off() }
  try {
    offs.push(register('/dsh-voice/simple-settings', ['GET', 'PUT'], (method, payload) => method === 'GET' ? service.get() : service.save(payload)))
    offs.push(register('/dsh-voice/models', ['POST'], (_method, payload) => service.models(payload)))
  } catch (error) {
    dispose()
    throw error
  }
  return dispose
}
