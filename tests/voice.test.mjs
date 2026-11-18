import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'

// Load the actual shipped client factory, without mounting or emulating a UI.
// Host actions in these unit tests are explicit test doubles, not live verification.
function loadVoice({ inspectElementProps = false } = {}) {
  const timers = new Map()
  let id = 0
  let exported
  let now = 0
  const events = new Map()
  const context = {
    Date: class extends Date { static now() { return now } },

    console, Blob, URL, AbortController,
    setTimeout(fn) { timers.set(++id, fn); return id },
    clearTimeout(key) { timers.delete(key) },
    setInterval(fn) { timers.set(++id, fn); return id },
    clearInterval(key) { timers.delete(key) },
    window: {
      addEventListener(name, fn) { events.set(name, fn) },
      removeEventListener(name, fn) { if (events.get(name) === fn) events.delete(name) },
      __ModuleLoader__: { load(def) {
      exported = def.factory(name => {
        if (name === 'react') return { createElement(type, props) {
          // Inspect adapter output only; never render or execute a component tree.
          if (inspectElementProps) return { type, props }
          throw new Error('UI is not mounted in unit tests')
        } }
        throw new Error(`No host module in unit test: ${name}`)
      })
    } } },
  }
  vm.runInNewContext(fs.readFileSync(new URL('../vendor/dsh-voice/lib/client.js', import.meta.url), 'utf8'), context)
  return { ...exported._test, timers, context, events,
    tick(ms = 50) { now += ms; for (const fn of [...timers.values()]) fn() },
  }
}

function setupHandsFree() {
  const api = loadVoice()
  const { voice } = api
  voice.input = { draft: '', attachmentIds: [], phase: 'plain', queue: [] }
  voice.session = { sessionId: 'session-a', running: false, openState: 'open' }
  voice.turnBoundary = { lastTurn: 0, openTurnStartSeq: null }
  voice.settings.audioFeedback = false
  voice._chainsPromise = new Promise(() => {}) // Capture is outside these state-machine unit tests.
  const sent = []
  voice.inputActions = {
    setDraft(text) { voice.input = { ...voice.input, draft: text } },
    submit() { sent.push(voice.input.draft); voice.input = { ...voice.input, phase: 'sending' } },
    focus() {},
  }
  return { ...api, sent }
}

const flush = async () => { for (let i = 0; i < 8; i++) await Promise.resolve() }

test('live slot adapter forwards actual documented hook values and starts from those values', () => {
  const api = loadVoice({ inspectElementProps: true })
  const input = { draft: '', attachmentIds: [], phase: 'plain', queue: [] }
  const session = { sessionId: 'session-a', running: false, openState: 'open' }
  const boundary = { lastTurn: 9, openTurnStartSeq: null, lastStepStartSeq: null, lastStepBoundary: null }
  const actions = { setDraft() {}, submit() {}, focus() {} }
  const props = {
    component: 'adapter-probe', inputActions: actions,
    useInput: select => select(input), useSession: select => select(session),
    useProjection(key) { assert.equal(key, 'turnBoundary'); return boundary },
    useSessionStatus: select => select(new Map()),
  }
  const result = api.LiveComposerSlot({ ...props })
  assert.equal(result.props.input, input)
  assert.equal(result.props.session, session)
  assert.equal(result.props.turnBoundary, boundary)
  assert.equal(result.props.turnFeedSupported, true)
  api.voice.settings.audioFeedback = false
  api.voice._chainsPromise = new Promise(() => {})
  api.startHandsFree(result.props)
  assert.ok(api.voice.handsFree)
  assert.equal(api.voice.phase, 'recording')
  api.stopHandsFree()
  const missing = api.LiveComposerSlot({ ...props, useProjection: undefined })
  api.startHandsFree(missing.props)
  assert.match(api.voice.error, /\[NO_TURN_HOOK\]/)
  assert.ok(!api.voice.handsFree)
})

function actualTurnTimeline(turn, status = 'closed', omitStart = false) {
  const start = { type: 'turn/start', seq: turn * 10, data: { turn } }
  const end = { type: 'turn/end', seq: turn * 10 + 8, data: { turn, reason: { kind: 'completed' } } }
  return { turnOrder: [turn], turns: new Map([[turn, { turn, status, start: omitStart ? undefined : start, end: status === 'closed' ? end : undefined, steps: [] }]]) }
}

test('NO_TURN_DATA uses actual conversation timeline and waits for a later durable turn end', async () => {
  const api = loadVoice({ inspectElementProps: true })
  let input = { draft: '', attachmentIds: [], phase: 'plain', queue: [] }
  const session = { sessionId: 'session-a', running: false, openState: 'open', blank: false }
  let timeline = actualTurnTimeline(9)
  let primary
  const sent = []
  const actions = {
    setDraft(text) { input = { ...input, draft: text }; sync() },
    submit() { sent.push(input.draft); input = { ...input, draft: '' }; sync() },
    focus() {},
  }
  const hooks = { component: 'adapter-probe', inputActions: actions,
    useInput: select => select(input), useSession: select => select(session),
    useProjection: () => primary,
    useConversation: select => select({ views: new Map([['chat', { timeline }]]) }),
    useSessionStatus: select => select(new Map()),
  }
  const sync = () => api.updateVoiceComposer(api.LiveComposerSlot(hooks).props)
  api.voice.settings.audioFeedback = false
  api.voice._chainsPromise = new Promise(() => {})
  api.startHandsFree(api.LiveComposerSlot(hooks).props)
  assert.ok(api.voice.handsFree, 'missing primary feed must not reject a valid durable timeline')
  assert.equal(api.voice.phase, 'recording')
  api.queueHandsFreePreview('timeline-backed phrase', api.voice._activeTarget)
  await api.submitHandsFreePending(api.voice.pending)
  assert.deepEqual(sent, ['timeline-backed phrase'])
  assert.equal(api.voice.phase, 'waiting', 'ACK is not AI completion')
  // Late appearance of the previously absent primary must not change the active timeline source.
  primary = { lastTurn: 1, openTurnStartSeq: null }
  sync(); api.reconcileHandsFree()
  assert.equal(api.voice.turnBoundary.lastTurn, 9)
  assert.equal(api.voice.phase, 'waiting')
  // Even a complete fast turn delivered in one snapshot is durable evidence.
  timeline = actualTurnTimeline(10)
  sync(); api.reconcileHandsFree()
  assert.equal(api.voice.turnBoundary.lastTurn, 10)
  assert.equal(api.voice.phase, 'recording')
  assert.deepEqual(sent, ['timeline-backed phrase'])
  api.stopHandsFree()
})

test('timeline boundary validates durable events and refuses unknown or unloaded history', () => {
  const api = loadVoice()
  const session = { running: false, openState: 'open', blank: false }
  const closed = api.conversationTimelineBoundary(actualTurnTimeline(9), session)
  assert.equal(closed.lastTurn, 9)
  assert.equal(closed.openTurnStartSeq, null)
  const open = api.conversationTimelineBoundary(actualTurnTimeline(9, 'open'), session)
  assert.equal(open.openTurnStartSeq, 90)
  const partial = api.conversationTimelineBoundary(actualTurnTimeline(9, 'closed', true), session)
  assert.equal(partial.lastTurn, 9)
  assert.equal(partial.openTurnStartSeq, null)
  assert.ok(!api.conversationTimelineBoundary(actualTurnTimeline(9, 'unknown'), session))
  const invalid = actualTurnTimeline(9)
  invalid.turns.get(9).end.data.turn = 999
  assert.ok(!api.conversationTimelineBoundary(invalid, session))
  const empty = { turnOrder: [], turns: new Map() }
  assert.ok(!api.conversationTimelineBoundary(empty, session))
  assert.ok(!api.conversationTimelineBoundary(empty, { ...session, blank: true, openState: 'loading' }))
  assert.equal(api.conversationTimelineBoundary(empty, { ...session, blank: true }).lastTurn, 0)
})

test('initial boundary selection uses freshest real source and respects an open turn', () => {
  const api = loadVoice()
  const session = { running: false, openState: 'open', blank: false }
  const older = { lastTurn: 8, openTurnStartSeq: null }
  assert.equal(api.selectConversationBoundary(older, actualTurnTimeline(9), session).source, 'timeline')
  const newer = { lastTurn: 10, openTurnStartSeq: null }
  assert.equal(api.selectConversationBoundary(newer, actualTurnTimeline(9), session).source, 'projection')
  const sameClosed = { lastTurn: 9, openTurnStartSeq: null }
  const result = api.selectConversationBoundary(sameClosed, actualTurnTimeline(9, 'open'), session)
  assert.equal(result.boundary.openTurnStartSeq, 90)
})

test('retry from unavailable state succeeds when a real timeline becomes available', () => {
  const api = loadVoice({ inspectElementProps: true })
  const input = { draft: '', attachmentIds: [], phase: 'plain', queue: [] }
  const session = { sessionId: 'session-a', running: false, openState: 'open', blank: false }
  let timeline
  const hooks = { component: 'adapter-probe', inputActions: { setDraft() {}, submit() {}, focus() {} },
    useInput: select => select(input), useSession: select => select(session), useProjection: () => undefined,
    useConversation: select => select({ views: new Map([['chat', { timeline }]]) }),
  }
  api.voice.settings.audioFeedback = false
  api.voice._chainsPromise = new Promise(() => {})
  api.startHandsFree(api.LiveComposerSlot(hooks).props)
  assert.equal(api.voice.phase, 'error')
  timeline = actualTurnTimeline(9)
  api.startHandsFree(api.LiveComposerSlot(hooks).props)
  assert.ok(api.voice.handsFree)
  assert.equal(api.voice.phase, 'recording')
  api.stopHandsFree()
})

test('active timeline cannot lower its baseline when a historical window replaces current turns', () => {
  const api = loadVoice({ inspectElementProps: true })
  const input = { draft: '', attachmentIds: [], phase: 'plain', queue: [] }
  const session = { sessionId: 'session-a', running: false, openState: 'open', blank: false }
  let timeline = actualTurnTimeline(50)
  const hooks = { component: 'adapter-probe', inputActions: { setDraft() {}, submit() {}, focus() {} },
    useInput: select => select(input), useSession: select => select(session), useProjection: () => undefined,
    useConversation: select => select({ views: new Map([['chat', { timeline }]]) }),
  }
  api.voice.settings.audioFeedback = false
  api.voice._chainsPromise = new Promise(() => {})
  api.startHandsFree(api.LiveComposerSlot(hooks).props)
  assert.ok(api.voice.handsFree)
  timeline = actualTurnTimeline(45)
  api.updateVoiceComposer(api.LiveComposerSlot(hooks).props)
  assert.ok(!api.voice.handsFree, 'historical turn45 must not become the next submission baseline')
  assert.equal(api.voice.phase, 'error')
  timeline = actualTurnTimeline(50)
  api.updateVoiceComposer(api.LiveComposerSlot(hooks).props)
  api.reconcileHandsFree()
  assert.ok(!api.voice.handsFree, 'restoring old turn50 cannot automatically restart listening')
})

test('startup diagnostics distinguish unavailable contracts without exposing content', () => {
  const api = setupHandsFree()
  const { turnBoundary: boundary, session, input } = api.voice
  const reason = api.conversationUnavailableReason
  assert.equal(reason(boundary, session, input, false), 'NO_TURN_HOOK')
  assert.equal(reason(undefined, session, input, true), 'NO_TURN_DATA')
  assert.equal(reason({ lastTurn: '9' }, session, input, true), 'INVALID_TURN_DATA')
  assert.equal(reason(boundary, undefined, input, true), 'NO_SESSION')
  assert.equal(reason(boundary, { openState: 'open' }, input, true), 'NO_RUNNING_STATE')
  assert.equal(reason(boundary, { running: false }, input, true), 'NO_OPEN_STATE')
  assert.equal(reason(boundary, session, { draft: 'private content' }, true), 'NO_INPUT_QUEUE')
  api.voice.turnBoundary = undefined
  api.startHandsFree()
  assert.match(api.voice.error, /\[NO_TURN_DATA\]/)
  assert.ok(!api.voice.handsFree)
  assert.equal(api.sent.length, 0)
})

test('late streaming connection closes after microphone teardown and cannot overwrite interim text', async () => {
  const api = setupHandsFree()
  let resolveConnect, onInterim, tracksStopped = 0, closed = 0
  api.context.MediaRecorder = class {
    static isTypeSupported() { return true }
    start() { this.state = 'recording' }
    stop() { this.state = 'inactive' }
  }
  api.context.navigator = { mediaDevices: { getUserMedia: async () => ({ getTracks: () => [{ stop() { tracksStopped++ } }] }) } }
  api.voice.activeOpId = 1
  api.voice.phase = 'recording'
  api.voice.streamingWs = {
    isSupported: () => true,
    createStream(options) { onInterim = options.onInterim; return { connect: () => new Promise(resolve => { resolveConnect = resolve }) } },
  }
  const rec = await api.openMic('message', 1)
  api.voice.rec = rec
  onInterim('current recording')
  assert.equal(api.voice.interimTranscript, 'current recording')
  rec.cancelled = true; rec.closing = true
  api.voice.teardownRec(rec)
  api.voice.rec = null
  api.voice.activeOpId = 2
  api.voice.interimTranscript = 'new recording'
  resolveConnect({ close() { closed++ } })
  await flush()
  onInterim('stale recording')
  assert.equal(tracksStopped, 1)
  assert.equal(closed, 1)
  assert.ok(!rec.wsStream)
  assert.equal(api.voice.interimTranscript, 'new recording')
})

test('hands-free refuses drafts, attachments, busy or unknown composer states', () => {
  for (const input of [
    { draft: 'keep my text', attachmentIds: [], phase: 'plain' },
    { draft: '', attachmentIds: ['photo'], phase: 'plain' },
    { draft: '', attachmentIds: [], phase: 'sending' },
    { draft: '' },
  ]) {
    const api = setupHandsFree()
    api.voice.input = input
    api.startHandsFree()
    assert.ok(!api.voice.handsFree)
    assert.equal(api.voice.input, input)
    assert.equal(api.sent.length, 0)
  }
})

test('dictation microphone binds its clicked composer and ignores later sidebar renders', () => {
  const api = setupHandsFree()
  const owner = { inputActions: api.voice.inputActions, input: api.voice.input, session: api.voice.session, turnBoundary: api.voice.turnBoundary }
  const other = { inputActions: { focus() {} }, input: { draft: '', attachmentIds: [], phase: 'plain', queue: [] }, session: { sessionId: 'sidebar-b' } }
  api.updateVoiceComposer(other)
  api.startDictation(owner)
  assert.equal(api.voice._activeTarget.sessionId, 'session-a')
  assert.equal(api.isVoiceComposerOwner(owner.inputActions), true)
  assert.equal(api.isVoiceComposerOwner(other.inputActions), false)
  assert.equal(api.updateVoiceComposer(other), false)
  assert.equal(api.voice.inputActions, owner.inputActions)
  api.updateVoiceComposer({ ...owner, session: { ...owner.session, sessionId: 'new-session' } })
  assert.equal(api.voice.phase, 'idle')
  assert.equal(api.sent.length, 0)
})

test('only owner unmount cancels active dictation or continuous conversation', () => {
  for (const continuous of [false, true]) {
    const api = setupHandsFree()
    const owner = { inputActions: api.voice.inputActions, input: api.voice.input, session: api.voice.session, turnBoundary: api.voice.turnBoundary }
    if (continuous) api.startHandsFree(owner)
    else api.startDictation(owner)
    api.releaseVoiceComposer({ focus() {} })
    assert.equal(api.voice.phase, 'recording')
    api.releaseVoiceComposer(owner.inputActions)
    assert.equal(api.voice.phase, 'idle')
    assert.ok(!api.voice.handsFree) // Non-continuous capture never initializes this optional state.
    assert.equal(api.timers.size, 0)
  }
})

test('hands-free binds clicked composer and ignores other composer snapshots', async () => {
  const api = setupHandsFree()
  const owner = { inputActions: api.voice.inputActions, input: api.voice.input, session: api.voice.session, turnBoundary: api.voice.turnBoundary }
  const wrongSent = []
  const other = {
    inputActions: { setDraft() {}, submit() { wrongSent.push(true) } },
    input: { draft: '', attachmentIds: [], phase: 'plain' }, session: { sessionId: 'sidebar-b' },
  }
  api.updateVoiceComposer(other) // sidebar rendered last before clicking main composer
  api.startHandsFree(owner)
  assert.equal(api.voice.handsFree.sessionId, 'session-a')
  assert.equal(api.voice.handsFree.actions, owner.inputActions)
  assert.equal(api.updateVoiceComposer(other), false)
  assert.equal(api.voice.inputActions, owner.inputActions)
  api.queueHandsFreePreview('only for main', api.voice._activeTarget)
  const sending = api.submitHandsFreePending(api.voice.pending)
  await flush()
  assert.deepEqual(api.sent, ['only for main'])
  assert.deepEqual(wrongSent, [])
  api.stopHandsFree()
  await sending
})

test('owner subscription updates expose host ACK and session changes', () => {
  const api = setupHandsFree()
  api.startHandsFree()
  const actions = api.voice.inputActions
  const next = { draft: '', attachmentIds: [], phase: 'plain', queue: [] }
  assert.equal(api.updateVoiceComposer({ inputActions: actions, input: next, session: api.voice.session, turnBoundary: api.voice.turnBoundary }), true)
  assert.equal(api.voice.input, next)
  api.updateVoiceComposer({ inputActions: actions, input: next, session: { sessionId: 'new-session' } })
  api.tick()
  assert.equal(api.voice.handsFree, null)
})

test('hands-free preview does not modify the composer', () => {
  const api = setupHandsFree()
  api.startHandsFree()
  assert.ok(api.voice.handsFree)
  assert.equal(api.voice.phase, 'recording')
  assert.equal(api.queueHandsFreePreview(' สวัสดี ', api.voice._activeTarget), true)
  assert.equal(api.voice.phase, 'pending')
  assert.equal(api.voice.pending.activeText, 'สวัสดี')
  assert.equal(api.voice.input.draft, '')
  assert.equal(api.sent.length, 0)
  api.stopHandsFree()
  assert.equal(api.timers.size, 0)
})

test('conversation sends once and waits beyond host ACK until AI turn completes', async () => {
  const api = setupHandsFree()
  api.startHandsFree()
  api.queueHandsFreePreview('first phrase', api.voice._activeTarget)
  const pending = api.voice.pending
  const sending = api.submitHandsFreePending(pending)
  await flush()
  await api.submitHandsFreePending(pending)
  assert.deepEqual(api.sent, ['first phrase'])
  assert.equal(api.voice.phase, 'processing')
  assert.equal(api.voice.handsFree.submitting, true)
  api.voice.input = { draft: '', attachmentIds: [], phase: 'plain', queue: [] } // simulated host ACK, not completion
  api.tick()
  await sending
  assert.equal(api.voice.phase, 'waiting')
  assert.equal(api.voice.handsFree.submitting, false)
  api.voice.session = { ...api.voice.session, running: true }
  api.voice.turnBoundary = { lastTurn: 1, openTurnStartSeq: 100 }
  api.reconcileHandsFree()
  assert.equal(api.voice.phase, 'waiting')
  api.voice.session = { ...api.voice.session, running: false }
  api.voice.turnBoundary = { lastTurn: 1, openTurnStartSeq: null }
  api.reconcileHandsFree()
  assert.equal(api.voice.phase, 'recording')
  api.queueHandsFreePreview('second phrase', api.voice._activeTarget)
  const second = api.submitHandsFreePending(api.voice.pending)
  await flush()
  assert.deepEqual(api.sent, ['first phrase', 'second phrase'])
  api.stopHandsFree()
  await second
  assert.equal(api.timers.size, 0)
})

test('turn gate distinguishes acceptance, open turn, fast terminal turn and unavailable state', () => {
  const api = setupHandsFree()
  const baseline = { lastTurn: 4, openTurnStartSeq: null }
  const gate = api.createConversationTurnGate(baseline, api.voice.session)
  assert.equal(api.conversationTurnState(gate, baseline, api.voice.session), 'waiting')
  assert.equal(api.conversationTurnState(gate, { lastTurn: 5, openTurnStartSeq: 123 }, { ...api.voice.session, running: true }), 'waiting')
  assert.equal(api.conversationTurnState(gate, { lastTurn: 5, openTurnStartSeq: null }, api.voice.session), 'complete')
  assert.equal(api.conversationTurnState(gate, { lastTurn: 3, openTurnStartSeq: null }, api.voice.session), 'waiting')
  assert.equal(api.conversationTurnState(gate, undefined, api.voice.session), 'unavailable')
  assert.equal(api.conversationTurnState(gate, { lastTurn: 5, openTurnStartSeq: null }, { ...api.voice.session, removed: true }), 'error')
  assert.equal(api.conversationTurnState(gate, { lastTurn: 5, openTurnStartSeq: null }, { ...api.voice.session, lastAgentError: 'transport failure' }), 'error')
})

test('starting during AI work or queued work waits, then listens without sending anything', () => {
  const api = setupHandsFree()
  api.voice.session.running = true
  api.voice.turnBoundary = { lastTurn: 1, openTurnStartSeq: 10 }
  api.startHandsFree()
  assert.ok(api.voice.handsFree)
  assert.equal(api.voice.phase, 'waiting')
  api.voice.session.running = false
  api.voice.turnBoundary = { lastTurn: 1, openTurnStartSeq: null }
  api.voice.input.queue = [{ message: 'another queued prompt' }]
  api.reconcileHandsFree()
  assert.equal(api.voice.phase, 'waiting')
  api.voice.input.queue = []
  api.voice.session.pendingSubmissions = [{ requestId: 'accepted-not-durable' }]
  api.reconcileHandsFree()
  assert.equal(api.voice.phase, 'waiting')
  api.voice.session.pendingSubmissions = []
  api.reconcileHandsFree()
  assert.equal(api.voice.phase, 'recording')
  assert.equal(api.sent.length, 0)
  api.stopHandsFree()
})

test('turn baseline is captured at actual submit after earlier AI work ends', async () => {
  const api = setupHandsFree()
  api.startHandsFree()
  api.queueHandsFreePreview('wait for earlier work', api.voice._activeTarget)
  api.voice.session.running = true
  api.voice.turnBoundary = { lastTurn: 1, openTurnStartSeq: 10 }
  const sending = api.submitHandsFreePending(api.voice.pending)
  await flush()
  assert.equal(api.sent.length, 0)
  api.voice.session.running = false
  api.voice.turnBoundary = { lastTurn: 1, openTurnStartSeq: null }
  api.tick()
  await flush()
  assert.deepEqual(api.sent, ['wait for earlier work'])
  assert.equal(api.voice.handsFree.turnGate.baselineTurn, 1)
  api.voice.input = { draft: '', attachmentIds: [], phase: 'plain', queue: [] }
  api.tick(); await sending
  assert.equal(api.voice.phase, 'waiting')
  // A start+end may be delivered in one React render: persistent lastTurn still proves a later turn.
  api.voice.turnBoundary = { lastTurn: 2, openTurnStartSeq: null }
  api.reconcileHandsFree()
  assert.equal(api.voice.phase, 'recording')
  assert.deepEqual(api.sent, ['wait for earlier work']) // no automatic replay after a closed turn
  api.stopHandsFree()
})

test('blur, hidden page and playback pause microphone without disabling conversation', () => {
  const api = setupHandsFree()
  api.startHandsFree()
  const owner = api.voice.handsFree
  api.setHandsFreePause('blur', true)
  assert.equal(api.voice.phase, 'paused')
  assert.equal(api.voice.handsFree, owner)
  api.setHandsFreePause('hidden', true)
  api.setHandsFreePause('blur', false)
  assert.equal(api.voice.phase, 'paused')
  api.setHandsFreePause('hidden', false)
  assert.equal(api.voice.phase, 'recording')
  api.voice.isTtsSpeaking = true
  api.reconcileHandsFree()
  assert.equal(api.voice.phase, 'paused')
  api.voice.isTtsSpeaking = false
  api.reconcileHandsFree()
  assert.equal(api.voice.phase, 'recording')
  assert.equal(api.sent.length, 0)
  api.stopHandsFree()
})

test('pending user interaction pauses listening without automatically answering', () => {
  const api = setupHandsFree()
  api.voice.pendingInteraction = { kind: 'approval' }
  api.startHandsFree()
  assert.equal(api.voice.phase, 'waiting')
  assert.equal(api.sent.length, 0)
  api.voice.pendingInteraction = undefined
  api.reconcileHandsFree()
  assert.equal(api.voice.phase, 'recording')
  api.stopHandsFree()
})

test('AI completion while unfocused cannot reopen microphone until focus returns', async () => {
  const api = setupHandsFree()
  api.startHandsFree()
  api.queueHandsFreePreview('one request', api.voice._activeTarget)
  const sending = api.submitHandsFreePending(api.voice.pending)
  await flush()
  api.voice.input = { draft: '', attachmentIds: [], phase: 'plain', queue: [] }
  api.tick(); await sending
  api.setHandsFreePause('blur', true)
  api.voice.turnBoundary = { lastTurn: 1, openTurnStartSeq: null }
  api.reconcileHandsFree()
  assert.equal(api.voice.phase, 'paused')
  assert.equal(api.voice.rec, null)
  api.setHandsFreePause('blur', false)
  assert.equal(api.voice.phase, 'recording')
  assert.deepEqual(api.sent, ['one request'])
  api.stopHandsFree()
})

test('explicit off while waiting cannot be rearmed by later AI completion', () => {
  const api = setupHandsFree()
  api.voice.session.running = true
  api.voice.turnBoundary = { lastTurn: 1, openTurnStartSeq: 10 }
  api.startHandsFree()
  assert.equal(api.voice.phase, 'waiting')
  api.stopHandsFree()
  api.voice.session.running = false
  api.voice.turnBoundary = { lastTurn: 1, openTurnStartSeq: null }
  api.reconcileHandsFree()
  assert.equal(api.voice.phase, 'idle')
  assert.equal(api.voice.handsFree, null)
  assert.equal(api.timers.size, 0)
  assert.equal(api.sent.length, 0)
})

test('stop or session switch between draft insertion and submit prevents stale send', async () => {
  for (const interrupt of [
    api => api.stopHandsFree(),
    api => { api.voice.session = { sessionId: 'session-b' } },
    api => { api.voice.input = { ...api.voice.input, draft: 'new user text' } },
  ]) {
    const api = setupHandsFree()
    api.startHandsFree()
    api.queueHandsFreePreview('cancelled text', api.voice._activeTarget)
    const sending = api.submitHandsFreePending(api.voice.pending)
    interrupt(api)
    await flush()
    api.tick(31000)
    await sending
    assert.deepEqual(api.sent, [])
    assert.equal(api.voice.handsFree, null)
  }
})

test('failed host admission preserves recognized text and stops instead of looping', async () => {
  const api = setupHandsFree()
  api.startHandsFree()
  api.queueHandsFreePreview('recoverable phrase', api.voice._activeTarget)
  const sending = api.submitHandsFreePending(api.voice.pending)
  await flush()
  api.voice.input = { ...api.voice.input, phase: 'plain' } // failure leaves draft intact
  api.tick(31000)
  await sending
  assert.equal(api.voice.input.draft, 'recoverable phrase')
  assert.equal(api.voice.handsFree, null)
  assert.equal(api.voice.phase, 'error')
  assert.deepEqual(api.sent, ['recoverable phrase'])
  assert.equal(api.timers.size, 0)
})

test('session switch or user typing cancels a pending automatic send', () => {
  for (const change of [
    voice => { voice.session = { sessionId: 'session-b' } },
    voice => { voice.input = { ...voice.input, draft: 'new user draft' } },
  ]) {
    const api = setupHandsFree()
    api.startHandsFree()
    api.queueHandsFreePreview('must not send', api.voice._activeTarget)
    change(api.voice)
    api.tick()
    assert.equal(api.voice.handsFree, null)
    assert.equal(api.voice.pending, null)
    assert.equal(api.sent.length, 0)
    assert.equal(api.timers.size, 0)
  }
})

test('Escape cancels listening and removes its handler', () => {
  const api = setupHandsFree()
  api.startHandsFree()
  let prevented = false
  api.events.get('keydown')({ key: 'Escape', preventDefault() { prevented = true } })
  assert.equal(prevented, true)
  assert.equal(api.voice.handsFree, null)
  assert.equal(api.events.has('keydown'), false)
  assert.equal(api.timers.size, 0)
})

test('hands-free uses gated amplitude without inheriting upstream Silero heuristic', () => {
  const api = setupHandsFree()
  assert.equal(api.isRecordingSpeech({ sileroSpeech: false }, 0.1), false) // legacy mode unchanged
  api.startHandsFree()
  assert.equal(api.isRecordingSpeech({ sileroSpeech: false }, 0.1), true)
  assert.equal(api.isRecordingSpeech({ sileroSpeech: true }, 0.01), false)
  assert.equal(api.isRecordingSpeech({ sileroSpeech: false }, 0), false)
  api.stopHandsFree()
})

test('idle silence rotates bounded buffers beyond 60 seconds without sending or turning conversation off', async () => {
  const api = setupHandsFree()
  api.startHandsFree()
  let onStop, restarts = 0
  const recorder = {
    state: 'recording',
    addEventListener(name, fn) { if (name === 'stop') onStop = fn },
    stop() { this.state = 'inactive'; onStop() },
    start() { this.state = 'recording'; restarts++ },
  }
  const rec = { recorder, mode: 'message', hadSpeech: false, silenceMs: 10000, closing: false,
    chunks: [], stream: { getTracks() { return [] } }, opId: api.voice.activeOpId }
  api.voice.rec = rec
  for (let i = 0; i < 8; i++) {
    rec.chunks.push(new Blob(['synthetic silence']))
    api.tickHandsFree(rec, 700, 15000)
    await flush()
    assert.ok(api.voice.handsFree)
    assert.equal(api.voice.phase, 'recording')
    assert.equal(rec.chunks.length, 0)
  }
  assert.equal(restarts, 8)
  assert.equal(api.sent.length, 0)
  api.stopHandsFree()
  await flush()
})

test('speech followed by silence stops the real recording path exactly once', async () => {
  const api = setupHandsFree()
  api.startHandsFree()
  let stopped = 0
  let onStop
  const recorder = {
    state: 'recording',
    addEventListener(name, fn) { if (name === 'stop') onStop = fn },
    stop() { stopped++; this.state = 'inactive'; onStop() },
  }
  const rec = {
    recorder, mode: 'message', hadSpeech: true, silenceMs: 650, closing: false,
    chunks: [], mime: 'audio/webm', stream: { getTracks() { return [] } },
    opId: api.voice.activeOpId, target: api.voice._activeTarget,
  }
  api.voice.rec = rec
  assert.equal(api.tickHandsFree(rec, 700), false)
  assert.equal(stopped, 0)
  rec.silenceMs = 700
  assert.equal(api.tickHandsFree(rec, 700), true)
  assert.equal(api.tickHandsFree(rec, 700), false)
  assert.equal(stopped, 1)
  await flush() // Empty synthetic audio is rejected, never submitted; conversation remains enabled.
  assert.equal(api.sent.length, 0)
  assert.ok(api.voice.handsFree)
  assert.equal(api.voice.phase, 'recording')
  api.stopHandsFree()
})

test('empty recognition cannot become an automatic send', () => {
  const api = setupHandsFree()
  api.startHandsFree()
  api.queueHandsFreePreview('  ', api.voice._activeTarget)
  assert.ok(api.voice.handsFree)
  assert.equal(api.voice.phase, 'recording')
  assert.equal(api.sent.length, 0)
  assert.equal(api.voice.input.draft, '')
  api.stopHandsFree()
})

test('visibility switches hide start controls but never an active hands-free stop', () => {
  const api = loadVoice()
  const hidden = { showDictationButton: false, showMessageButton: false, showDictationModeButton: false, showHandsFreeButton: false }
  assert.ok(Object.values(api.composerControlVisibility(hidden)).every(value => value === false))
  const active = api.composerControlVisibility(hidden, true)
  assert.equal(active.handsFree, false)
  assert.equal(active.stopHandsFree, true)
  assert.deepEqual(Object.entries(api.composerControlVisibility({})).filter(([, visible]) => visible).map(([name]) => name), ['dictation', 'handsFree'])
  const optional = api.composerControlVisibility({ showMessageButton: true, showDictationModeButton: true })
  assert.equal(optional.message, true)
  assert.equal(optional.mode, true)
})

test('minimal UI payload preserves unchanged API configuration and never sends saved secret placeholders', () => {
  const api = loadVoice()
  const saved = { baseUrl: 'https://speech.example/v1', model: 'whisper-1', apiKeySet: true }
  const draft = { ...saved, apiKey: '', clearApiKey: false, hotkey: 'Alt', controls: { handsFree: false } }
  assert.equal(api.simpleConnectionChanged(draft, saved), false)
  const payload = api.simpleSettingsPayload(draft, 5, saved)
  assert.equal(payload.hotkey, 'Alt')
  assert.equal(payload.controls.handsFree, false)
  assert.equal(payload.expectedRevision, 5)
  assert.equal('baseUrl' in payload, false)
  assert.equal('model' in payload, false)
  assert.equal('apiKey' in payload, false)
  assert.equal('apiKeySet' in payload, false)
  const changed = api.simpleSettingsPayload({ ...draft, apiKey: 'new-key' }, 5, saved)
  assert.equal(changed.baseUrl, saved.baseUrl)
  assert.equal(changed.model, saved.model)
  assert.equal(changed.apiKey, 'new-key')
  assert.equal(api.simpleSettingsPayload({ ...draft, clearApiKey: true }, 5, saved).clearApiKey, true)
})

test('minimal UI validates URL/model before API edits while allowing unrelated controls to remain usable', () => {
  const api = loadVoice()
  assert.equal(api.validateSimpleSettings({ baseUrl: 'https://speech.example/v1', model: 'whisper-1' }), '')
  assert.equal(api.validateSimpleSettings({ baseUrl: 'https://u:secret@host.test/v1', model: 'x' }), 'simpleInvalidUrl')
  assert.equal(api.validateSimpleSettings({ baseUrl: 'https://host.test/v1', model: '' }), 'simpleModelRequired')
  const legacy = { baseUrl: '', model: '' }
  assert.equal(api.simpleConnectionChanged({ ...legacy, apiKey: '', hotkey: 'Alt', controls: {} }, legacy), false)
})

test('changing API endpoint clears stale model but key and control edits preserve selection', () => {
  const api = loadVoice()
  const draft = { baseUrl: 'https://one.example/v1', model: 'old-model', apiKey: '', hotkey: 'Alt', controls: {} }
  const changed = api.updateSimpleSettingsDraft(draft, 'baseUrl', 'https://two.example/v1')
  assert.equal(changed.model, '')
  assert.equal(api.validateSimpleSettings(changed), 'simpleModelRequired')
  assert.equal(api.updateSimpleSettingsDraft(draft, 'apiKey', 'new-key').model, 'old-model')
  assert.equal(api.updateSimpleSettingsDraft(draft, 'hotkey', 'Shift+KeyV').model, 'old-model')
})

test('minimal UI API helper refuses HTTP failure or false success envelopes', async () => {
  const api = loadVoice()
  api.context.fetch = async () => ({ ok: false, status: 409, json: async () => ({ ok: false, error: { code: 'conflict', message: 'reload' } }) })
  await assert.rejects(api.simpleSettingsRequest('simple-settings'), error => error.status === 409 && error.code === 'conflict')
  api.context.fetch = async () => ({ ok: true, status: 200, json: async () => ({ ok: false }) })
  await assert.rejects(api.simpleSettingsRequest('simple-settings'))
  let target
  api.context.fetch = async (url, init) => { target = { url, init }; return { ok: true, status: 200, json: async () => ({ ok: true, models: [] }) } }
  const result = await api.simpleSettingsRequest('models', { method: 'POST', body: '{"baseUrl":"https://speech.example/v1"}' })
  assert.equal(result.ok, true)
  assert.equal(target.url, '/dsh-voice/models')
  assert.equal(target.init.method, 'POST')
})

test('existing Alt push-to-talk matches only Alt, not Ctrl', () => {
  const api = loadVoice()
  assert.equal(api.hotkeyMatches({ key: 'Alt', code: 'AltLeft' }, 'Alt'), true)
  assert.equal(api.hotkeyMatches({ key: 'Control', code: 'ControlLeft' }, 'Alt'), false)
  assert.equal(api.isHotkeyRelease({ key: 'Alt', code: 'AltRight' }, 'Alt'), true)
})

test('Shift V shortcut still requires Shift', () => {
  const api = loadVoice()
  assert.equal(api.hotkeyMatches({ key: 'V', code: 'KeyV', shiftKey: true }, 'Shift+KeyV'), true)
  assert.equal(api.hotkeyMatches({ key: 'v', code: 'KeyV', shiftKey: false }, 'Shift+KeyV'), false)
})
