import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createHash } from 'node:crypto';
import { buildVoice, renderVoiceBundle } from '../tools/build-voice.mjs';
import { adaptVoiceSettings } from '../voice-settings-adapter.js';
const root = new URL('../', import.meta.url);
const read = p => fs.readFileSync(new URL(p, root), 'utf8');
const manifest = JSON.parse(read('package.json'));

test('published browser entry registers exactly one root module and is reproducible', () => {
  const entries = [];
  vm.runInNewContext(read(manifest.exports['./client']), { window: { __ModuleLoader__: { load: e => entries.push(e) } } });
  assert.equal(entries.length, 1);
  assert.equal(entries[0].id, manifest.name);
  assert.equal(typeof entries[0].factory, 'function');
  assert.equal(buildVoice(true).modules, 1);
});

test('composition keeps both lifecycles and service injections under one owner', () => {
  const language = `window.__ModuleLoader__.load({id:'dsh-ui-thai',factory(){return {inject:['locale'],apply(ctx){ctx.events.push('language');ctx.effect(()=>()=>ctx.events.push('dispose-language'));}}}});`;
  const voice = `window.__ModuleLoader__.load({id:'@goodandready/dsh-voice',factory(){const PKG='@goodandready/dsh-voice';const ROW_ID='dsh-voice';const ROW_CONFIG_KEY = PKG + '#' + ROW_ID;return {inject:['locale','slots'],apply(ctx){ctx.events.push(ROW_CONFIG_KEY);ctx.effect(()=>()=>ctx.events.push('dispose-voice'));}}}});`;
  let entry;
  vm.runInNewContext(renderVoiceBundle(language, voice), { window: { __ModuleLoader__: { load: e => { entry = e; } } } });
  const plugin = entry.factory();
  assert.deepEqual(Array.from(plugin.inject), ['locale', 'slots']);
  const cleanup = [], ctx = { events: [], effect: fn => cleanup.push(fn()) };
  plugin.apply(ctx);
  assert.deepEqual(ctx.events, ['language', 'dsh-ui-thai#local-dsh-thai']);
  for (const dispose of cleanup.reverse()) dispose();
  assert.deepEqual(ctx.events.slice(2), ['dispose-voice', 'dispose-language']);
});

test('vendor snapshot includes real host imports, license, provenance and no nested repository', () => {
  const provenance = JSON.parse(read('vendor/dsh-voice/PROVENANCE.json'));
  assert.match(provenance.upstreamCommit, /^[a-f0-9]{40}$/);
  assert.equal(provenance.upstreamVersion, '0.9.57');
  assert.match(read('vendor/dsh-voice/LICENSE'), /Copyright \(c\) 2026 GooDAnDReaDY/);
  for (const [file, digest] of Object.entries(provenance.files)) {
    const content = read('vendor/dsh-voice/' + file);
    assert.equal(createHash('sha256').update(content).digest('hex'), digest, file + ' provenance drift');
    if (!file.endsWith('.js')) continue;
    for (const match of content.matchAll(/(?:from\s+|import\()['"](\.[^'"]+)['"]/g)) {
      const target = new URL(match[1], new URL('vendor/dsh-voice/' + file, root));
      assert(fs.existsSync(target), `${file}: missing ${match[1]}`);
    }
  }
  function walk(url) {
    for (const entry of fs.readdirSync(url, { withFileTypes: true })) {
      assert(!['.git', 'node_modules'].includes(entry.name));
      assert(!entry.isSymbolicLink());
      if (entry.isDirectory()) walk(new URL(entry.name + '/', url));
    }
  }
  walk(new URL('vendor/dsh-voice/', root));
  assert.match(read('index.js'), /export \{ Config, inject, apply \} from '\.\/vendor\/dsh-voice\/lib\/index.js'/);
});

test('settings adapter maps current DSH entry descriptors and revisioned writes without leaking old row', async () => {
  const calls = [];
  const adapter = adaptVoiceSettings({
    describe: () => [{ns:'dsh-voice', value:{hotkey:'Control'}, revision:7}, {ns:'local-dsh-thai', value:{hotkey:'Alt'}, revision:2}],
    replace: async (...args) => calls.push(['replace', ...args]),
    update: async (...args) => calls.push(['update', ...args]),
  });
  assert.deepEqual(adapter.describe(), [{ns:'dsh-voice', value:{hotkey:'Alt'}, config:{hotkey:'Alt'}, revision:2}]);
  await adapter.replace('dsh-voice', {hotkey:'Alt'}, 2);
  await adapter.update('dsh-voice', {hotkey:'Shift'}, 3);
  assert.deepEqual(calls, [['replace','local-dsh-thai',{hotkey:'Alt'},2], ['update','local-dsh-thai',{hotkey:'Shift'},3]]);
  assert.match(read('vendor/dsh-voice/lib/index.js'), /settingsService = adaptVoiceSettings\(sctx.settings\)/);
  assert.match(read('bundle-client.js'), /settingsService.get\('local-dsh-thai'\)/);
  assert.match(read('bundle-client.js'), /settingsService.bind\(\{ namespace: 'local-dsh-thai' \}\)/);
});

test('embedded voice preserves public settings identity but updates only the unified package', () => {
  assert.match(read('vendor/dsh-voice/lib/index.js'), /export const NS = 'dsh-voice'/);
  assert.match(read('vendor/dsh-voice/lib/server-routes.js'), /packageName: 'dsh-ui-thai'/);
  assert.match(read('vendor/dsh-voice/lib/server-routes.js'), /new URL\('\.\.\/\.\.\/\.\.\/package.json', import.meta.url\)/);
  assert.match(read('bundle-client.js'), /const ROW_CONFIG_KEY = 'dsh-ui-thai#local-dsh-thai'/);
  assert.match(read('bundle-client.js'), /const NS = 'dsh-voice'/);
  assert(!manifest.dependencies?.['@goodandready/dsh-voice']);
  assert(manifest.files.includes('vendor/dsh-voice'));
  for (const peer of Object.keys(manifest.peerDependencies)) {
    assert.equal(manifest.peerDependenciesMeta[peer].optional, true, 'Host peers must not install a second DSH');
  }
});
