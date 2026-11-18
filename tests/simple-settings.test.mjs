import test from 'node:test'
import assert from 'node:assert/strict'
import http from 'node:http'
import { once } from 'node:events'
import { createSimpleSettingsService, normalizeBaseUrl, simpleCredentialRef, simpleRecordKey, resolveSimpleCredential, registerSimpleSettingsRoutes, SIMPLE_PROVIDER_KEY } from '../vendor/dsh-voice/lib/simple-settings.js'
import { OpenAICompatibleProvider } from '../vendor/dsh-voice/lib/provider-registry.js'

function fixture(options = {}) {
  let config = {
    hotkey: 'Alt', localOnly: false, vocabulary: ['keep-me'],
    customProviders: [{ key: 'existing', template: 'openai-transcriptions', baseURL: 'https://speech.example/v1', model: 'whisper-existing', keyEnv: 'OLD_SHARED_KEY' }],
    message: { chain: [{ provider: 'existing', model: 'whisper-existing' }], autoSendMs: 4000 },
    dictation: { chain: [{ provider: 'other', model: 'old-dictation' }], vadSilenceMs: 700 },
    ...options.config,
  }
  let revision = 5
  const records = new Map()
  const calls = { replace: 0, records: 0, fetch: [] }
  const credentials = {
    async resolve(ref) { return ref === 'OLD_SHARED_KEY' ? { value: 'legacy-test-secret' } : undefined },
    async readRecord(key) { return records.get(key) },
    async modifyRecord(key, fn) { calls.records++; const result = await fn(records.get(key)); if (result !== undefined) records.set(key, result) },
  }
  const settings = {
    describe: () => [{ ns: 'dsh-voice', revision, value: config }],
    async replace(ns, next, expected) {
      calls.replace++
      assert.equal(ns, 'dsh-voice')
      assert.equal(expected, revision)
      if (options.failSave) throw new Error('storage failed: secret must not leak')
      config = next
      revision++
    },
  }
  const service = createSimpleSettingsService({
    live: () => config, credentials, getSettingsService: () => settings,
    fetchImpl: options.fetchImpl || (async (url, init) => { calls.fetch.push({ url, init }); return new Response(JSON.stringify({ data: [{ id: 'whisper-1' }, { id: 'whisper-1' }, { id: 'audio-model' }] })) }),
    timeoutMs: options.timeoutMs || 100,
  })
  return { service, records, credentials, calls, get config() { return config }, get revision() { return revision } }
}

const rejectsCode = (promise, code) => assert.rejects(promise, error => error.code === code)

test('partial route registration failure rolls back prior routes', () => {
  const routes = new Map([['/dsh-voice/models', 'already-mounted']])
  const ctx = { credentials: {}, webServer: { register(route) {
    if (routes.has(route.path)) throw new Error('duplicate route')
    routes.set(route.path, route)
    return () => routes.delete(route.path)
  } } }
  assert.throws(() => registerSimpleSettingsRoutes(ctx, {}), /duplicate route/)
  assert.equal(routes.has('/dsh-voice/simple-settings'), false)
  assert.equal(routes.get('/dsh-voice/models'), 'already-mounted')
})

test('route cleanup removes both endpoints and is idempotent', () => {
  const routes = new Map()
  const ctx = { credentials: {}, webServer: { register(route) { routes.set(route.path, route); return () => routes.delete(route.path) } } }
  const dispose = registerSimpleSettingsRoutes(ctx, {})
  assert.equal(routes.size, 2)
  dispose(); dispose()
  assert.equal(routes.size, 0)
})

test('base URL validation permits custom/local roots and rejects embedded secrets', () => {
  assert.equal(normalizeBaseUrl(' http://127.0.0.1:8000/v1/// '), 'http://127.0.0.1:8000/v1')
  for (const value of ['', 'ftp://example.org', 'https://u:password@example.org/v1', 'https://example.org/v1?api_key=secret', 'https://example.org/#fragment']) {
    assert.throws(() => normalizeBaseUrl(value), error => error.code === 'base_url')
  }
})

test('GET prefills active custom provider but never returns credentials or changes config', async () => {
  const f = fixture()
  const before = structuredClone(f.config)
  const view = await f.service.get()
  assert.equal(view.baseUrl, 'https://speech.example/v1')
  assert.equal(view.apiKeySet, true)
  assert.equal(view.model, 'whisper-existing')
  assert.equal(view.hotkey, 'Alt')
  assert.deepEqual(view.controls, { dictation: true, message: false, mode: false, handsFree: true })
  assert.ok(!JSON.stringify(view).includes('legacy-test-secret'))
  assert.deepEqual(f.config, before)
  assert.equal(f.calls.replace, 0)
  assert.equal(f.calls.records, 0)
})

test('model discovery uses configured origin key, deduplicates IDs and does not save draft keys', async () => {
  const f = fixture()
  assert.deepEqual((await f.service.models({ baseUrl: 'https://speech.example/v1' })).models, [{ id: 'audio-model' }, { id: 'whisper-1' }])
  assert.equal(f.calls.fetch[0].url, 'https://speech.example/v1/models')
  assert.equal(f.calls.fetch[0].init.headers.Authorization, 'Bearer legacy-test-secret')
  assert.equal(f.calls.fetch[0].init.redirect, 'error')
  await f.service.models({ baseUrl: 'https://new.example/v1', apiKey: 'draft-only-secret' })
  assert.equal(f.calls.fetch[1].init.headers.Authorization, 'Bearer draft-only-secret')
  assert.equal(f.calls.records, 0)
  assert.equal(f.calls.replace, 0)
})

test('saved keys cannot be reused against another origin', async () => {
  const f = fixture()
  await rejectsCode(f.service.models({ baseUrl: 'https://untrusted.example/v1' }), 'credential_origin')
  assert.equal(f.calls.fetch.length, 0)
  await f.service.models({ baseUrl: 'http://localhost:9000/v1', clearApiKey: true })
  assert.equal(f.calls.fetch[0].init.headers.Authorization, undefined)
})

test('new key is stored as a credential record and both real voice chains select the chosen model', async () => {
  const f = fixture()
  const view = await f.service.save({ baseUrl: 'https://new.example/v1', apiKey: 'saved-test-secret', model: 'audio-model', hotkey: 'Shift+KeyV', controls: { handsFree: false }, expectedRevision: 5 })
  assert.equal(view.apiKeySet, true)
  assert.equal(view.hotkey, 'Shift+KeyV')
  assert.equal(view.controls.handsFree, false)
  for (const mode of ['dictation', 'message']) assert.deepEqual(f.config[mode].chain, [{ provider: SIMPLE_PROVIDER_KEY, model: 'audio-model' }])
  assert.equal(f.config.dictation.vadSilenceMs, 700)
  assert.deepEqual(f.config.vocabulary, ['keep-me'])
  assert.ok(!JSON.stringify(f.config).includes('saved-test-secret'))
  assert.ok(!JSON.stringify(view).includes('saved-test-secret'))
  const ref = simpleCredentialRef('https://new.example/v1')
  assert.equal(f.records.get(simpleRecordKey(ref)).payload.apiKey, 'saved-test-secret')
  assert.equal(await resolveSimpleCredential(f.credentials, ref, f.config), 'saved-test-secret')
})

test('controls-only save preserves legacy providers, timing, localOnly and shared key', async () => {
  const f = fixture({ config: { localOnly: true } })
  const before = structuredClone(f.config)
  await f.service.save({ hotkey: '', controls: { mode: false, message: false, dictation: true, handsFree: false }, expectedRevision: 5 })
  assert.deepEqual(f.config.message, before.message)
  assert.deepEqual(f.config.dictation, before.dictation)
  assert.deepEqual(f.config.customProviders, before.customProviders)
  assert.equal(f.config.localOnly, true)
  assert.equal(f.config.hotkey, '')
  assert.equal(f.calls.records, 0)
})

test('revision conflict and invalid input do not write credentials or settings', async () => {
  const f = fixture()
  await rejectsCode(f.service.save({ apiKey: 'unused-secret', expectedRevision: 4 }), 'conflict')
  await rejectsCode(f.service.save({ apiKey: 'bad\nheader', expectedRevision: 5 }), 'api_key')
  await rejectsCode(f.service.save({ controls: { handsFree: 'false' }, expectedRevision: 5 }), 'controls')
  assert.equal(f.calls.records, 0)
  assert.equal(f.calls.replace, 0)
})

test('config write failure rolls credential back and reports failure without leaking its value', async () => {
  const f = fixture({ failSave: true })
  const ref = simpleCredentialRef('https://speech.example/v1')
  const key = simpleRecordKey(ref)
  const original = { kind: 'grant', payload: { origin: 'https://speech.example', apiKey: 'old-record-secret' } }
  f.records.set(key, original)
  await rejectsCode(f.service.save({ apiKey: 'replacement-secret', expectedRevision: 5 }), 'save_failed')
  assert.deepEqual(f.records.get(key), original)
  assert.equal(f.revision, 5)
})

test('blank key preserves existing auth; explicit clear disconnects it without deleting a shared legacy key', async () => {
  const f = fixture()
  await f.service.save({ apiKey: '', hotkey: 'Alt', expectedRevision: 5 })
  assert.equal(f.config.customProviders[0].keyEnv, 'OLD_SHARED_KEY')
  await f.service.save({ clearApiKey: true, expectedRevision: 6 })
  const active = f.config.customProviders.find(p => p.key === SIMPLE_PROVIDER_KEY)
  assert.equal(active.keyEnv, '')
  assert.equal((await f.service.get()).apiKeySet, false)
  assert.equal(f.calls.records, 0)
})

test('HTTP and malformed model responses are actionable errors without echoing provider secrets', async () => {
  for (const [response, code] of [
    [new Response('token=do-not-echo', { status: 401 }), 'models_http'],
    [new Response('<html>bad gateway</html>'), 'models_response'],
    [new Response('{"models":[]}'), 'models_response'],
    [new Response('{"data":[{"id":null}]}'), 'models_response'],
  ]) {
    const f = fixture({ fetchImpl: async () => response })
    await assert.rejects(f.service.models({ baseUrl: 'https://speech.example/v1' }), error => error.code === code && !error.message.includes('do-not-echo'))
  }
})

test('model discovery timeout terminates instead of hanging', async () => {
  const f = fixture({ timeoutMs: 15, fetchImpl: (_url, { signal }) => new Promise((_resolve, reject) => signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true })) })
  await rejectsCode(f.service.models({ baseUrl: 'https://speech.example/v1' }), 'models_timeout')
})

test('transcription errors never reflect a provider-echoed API key', async () => {
  const provider = new OpenAICompatibleProvider({ key: SIMPLE_PROVIDER_KEY, template: 'openai-transcriptions', baseURL: 'https://speech.example/v1', model: 'whisper', keyEnv: 'TEST_REF' })
  let redirect
  const result = await provider.transcribe({
    resolveKey: async () => 'must-not-leak-secret',
    fetchImpl: async (_url, options) => { redirect = options.redirect; return new Response(JSON.stringify({ error: { message: 'invalid key must-not-leak-secret' } }), { status: 401 }) },
  }, { bytes: Buffer.from('fixture'), mime: 'audio/wav' })
  assert.equal(result.ok, false)
  assert.match(result.reason, /401/)
  assert.ok(!JSON.stringify(result).includes('must-not-leak-secret'))
  assert.equal(redirect, 'error')
})

test('concurrent saves use revisions and cannot overwrite a newer configured key', async () => {
  const f = fixture()
  const results = await Promise.allSettled([
    f.service.save({ apiKey: 'first-test-key', expectedRevision: 5 }),
    f.service.save({ apiKey: 'second-test-key', expectedRevision: 5 }),
  ])
  assert.equal(results[0].status, 'fulfilled')
  assert.equal(results[1].status, 'rejected')
  assert.equal(results[1].reason.code, 'conflict')
  const ref = simpleCredentialRef('https://speech.example/v1')
  assert.equal(await resolveSimpleCredential(f.credentials, ref, f.config), 'first-test-key')
})

test('tampered configured origins cannot resolve a saved credential record', async () => {
  const f = fixture()
  await f.service.save({ apiKey: 'bound-key', expectedRevision: 5 })
  const ref = simpleCredentialRef('https://speech.example/v1')
  const tampered = structuredClone(f.config)
  tampered.customProviders.find(row => row.key === SIMPLE_PROVIDER_KEY).baseURL = 'https://different.example/v1'
  assert.equal(await resolveSimpleCredential(f.credentials, ref, tampered), '')
})

test('real HTTP model and transcription requests carry the stored key and selected model', async t => {
  const seen = []
  const server = http.createServer(async (req, res) => {
    const chunks = []
    for await (const chunk of req) chunks.push(chunk)
    seen.push({ url: req.url, authorization: req.headers.authorization, body: Buffer.concat(chunks).toString() })
    res.setHeader('Content-Type', 'application/json')
    res.end(req.url === '/v1/models' ? JSON.stringify({ data: [{ id: 'local-whisper-test' }] }) : JSON.stringify({ text: 'fixture transcription' }))
  })
  server.listen(0, '127.0.0.1')
  await once(server, 'listening')
  t.after(async () => { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)) })
  const baseUrl = `http://127.0.0.1:${server.address().port}/v1`
  const f = fixture({ fetchImpl: fetch })
  await f.service.save({ baseUrl, model: 'local-whisper-test', apiKey: 'local-fixture-key', expectedRevision: 5 })
  assert.deepEqual((await f.service.models({ baseUrl })).models, [{ id: 'local-whisper-test' }])
  const spec = f.config.customProviders.find(p => p.key === SIMPLE_PROVIDER_KEY)
  const provider = new OpenAICompatibleProvider(spec)
  const result = await provider.transcribe({ fetchImpl: fetch, resolveKey: ref => resolveSimpleCredential(f.credentials, ref, f.config) }, { bytes: Buffer.from('synthetic-test-audio'), mime: 'audio/wav', models: { [SIMPLE_PROVIDER_KEY]: 'local-whisper-test' } })
  assert.equal(result.text, 'fixture transcription')
  assert.deepEqual(seen.map(r => r.url), ['/v1/models', '/v1/audio/transcriptions'])
  assert.ok(seen.every(r => r.authorization === 'Bearer local-fixture-key'))
  assert.match(seen[1].body, /name="model"\r\n\r\nlocal-whisper-test/)
  // This is a local wire-contract fixture, not real audio recognition or an external provider test.
})
