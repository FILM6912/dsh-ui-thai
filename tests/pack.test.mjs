import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { build, sources, translations, validate, render, root } from '../tools/build.mjs';

const source = fs.readFileSync(new URL('../client.js', import.meta.url), 'utf8');
function plugin() {
  let registration;
  vm.runInNewContext(source, { window: { __ModuleLoader__: { load: entry => { registration = entry; } } } });
  assert.equal(registration.id, 'dsh-ui-thai');
  const instance = registration.factory();
  assert.deepEqual(Array.from(instance.inject), ['locale']);
  return instance;
}
function harness(failAt = -1) {
  const languages = new Map(), dictionaries = new Map(), effects = [];
  let calls = 0;
  return {
    languages, dictionaries, effects,
    effect(run) { effects.push(run()); },
    locale: {
      addLanguage(def) {
        assert.equal(def.id, 'th'); assert.equal(def.label, 'ไทย'); assert.equal(def.fallback, 'en');
        assert(!languages.has(def.id)); languages.set(def.id, def);
        return () => languages.delete(def.id);
      },
      register(ns, locale, dict) {
        if (calls++ === failAt) throw Error('registration failed');
        assert.equal(locale, 'th'); assert(!dictionaries.has(ns)); dictionaries.set(ns, dict);
        return () => dictionaries.delete(ns);
      },
      setLocale() { assert.fail('Language pack must not force the preference'); },
    },
  };
}

test('all frozen source namespaces, keys and placeholder multisets match', () => validate(sources(), translations()));
test('generator is deterministic and checked-in artifact is current', () => {
  assert.deepEqual(build(true), { namespaces: 68, keys: 3965 });
  assert.equal(render(translations()), render(translations()));
});
test('factory is side-effect free and plugin registers, disposes and remounts', () => {
  const pack = plugin(); const ctx = harness();
  pack.apply(ctx);
  assert.equal(ctx.languages.size, 1); assert.equal(ctx.dictionaries.size, 68);
  assert.equal(ctx.dictionaries.get('common').cancel, 'ยกเลิก');
  assert.equal(ctx.dictionaries.get('settings.locale')['language.title'], 'ภาษา');
  const hub = ctx.dictionaries.get('dsh-plugin');
  assert.equal(Object.keys(hub).length, 474);
  assert.equal(hub.nav, 'ศูนย์ปลั๊กอิน');
  assert.equal(hub['category.tools'], 'เครื่องมือและความสามารถ');
  assert.equal(hub['categoryShort.tools'], 'เครื่องมือ');
  ctx.effects.pop()(); assert.equal(ctx.languages.size, 0); assert.equal(ctx.dictionaries.size, 0);
  pack.apply(ctx); assert.equal(ctx.dictionaries.size, 68);
  const dispose = ctx.effects.pop(); dispose(); dispose();
  assert.equal(ctx.languages.size, 0); assert.equal(ctx.dictionaries.size, 0);
});
test('a failed registration rolls back partial dictionaries and the language', () => {
  const ctx = harness(3);
  assert.throws(() => plugin().apply(ctx), /registration failed/);
  assert.equal(ctx.dictionaries.size, 0); assert.equal(ctx.languages.size, 0); assert.equal(ctx.effects.length, 0);
});
test('key and placeholder regressions fail validation', () => {
  const th = structuredClone(translations());
  delete th.common.cancel;
  assert.throws(() => validate(sources(), th), /key coverage/);
  const other = structuredClone(translations());
  other.common['number.thousand'] = '{wrong}K';
  assert.throws(() => validate(sources(), other), /placeholders/);
});
test('npm package, loader patch and client module share one public identity', () => {
  const manifest = JSON.parse(fs.readFileSync(root + '/package.json', 'utf8'));
  const patch = fs.readFileSync(root + '/' + manifest.dsh.bundle.patch, 'utf8');
  const names = [...patch.matchAll(/^\s+name:\s*['"]?([^\s'"]+)['"]?\s*$/gm)].map(match => match[1]);
  let registration;
  vm.runInNewContext(source, { window: { __ModuleLoader__: { load: entry => { registration = entry; } } } });
  assert.equal(manifest.name, 'dsh-ui-thai');
  assert.deepEqual(names, ['@goodandready/dsh-voice', manifest.name]);
  assert.match(patch, /- id: dsh-voice\s+name: '@goodandready\/dsh-voice'\s+disabled: true/);
  assert.equal(registration.id, manifest.name);
  assert.match(patch, /^\s+- id: local-dsh-thai\s*$/m);
  assert(!Object.hasOwn(manifest, 'private'));
  assert.deepEqual(manifest.publishConfig, { access: 'public', registry: 'https://registry.npmjs.org/' });
  assert(manifest.keywords.includes('dsh-plugin') && manifest.keywords.includes('thai'));
  assert.equal(manifest.scripts.prepublishOnly, 'npm test && npm run check && node --check bundle-client.js && node --check index.js');
  assert.equal(manifest.scripts.test, 'node --test tests/*.test.mjs');
  for (const file of ['LICENSE', 'NOTICE', 'licenses', 'PUBLISHING.md']) assert(manifest.files.includes(file), `${file} must be published`);
});

test('manifest exposes native client, locales, icon and patch without install scripts', () => {
  const manifest = JSON.parse(fs.readFileSync(root + '/package.json', 'utf8'));
  assert.equal(manifest.name, 'dsh-ui-thai');
  assert.equal(manifest.engines.dsh, '0.2.2-rc.3');
  assert.deepEqual(manifest.dsh.client.inject, ['@deepseek-ai/dsh-client-locale', '@deepseek-ai/dsh-client-ui-slots', '@deepseek-ai/dsh-client-ui-settings']);
  assert.equal(manifest.exports['./client'], './bundle-client.js');
  assert.equal(manifest.dsh.client.immediately, true);
  for (const hook of ['prepare', 'preinstall', 'install', 'postinstall']) assert(!manifest.scripts[hook], `${hook} must not execute during installation`);
  for (const p of ['./index.js','./client.js','./icon.svg','./cordis.patch.yml','./locale/en.json','./locale/th.json','./LICENSE','./NOTICE','./licenses/Apache-2.0.txt','./PUBLISHING.md']) assert(fs.existsSync(root + '/' + p));
  for (const locale of ['en','th']) {
    const metadata = JSON.parse(fs.readFileSync(root + '/locale/' + locale + '.json','utf8')).meta;
    assert(metadata.title && metadata.description); assert(!metadata.detail);
  }
  assert(!/document\.|MutationObserver|setInterval|setLocale|fetch\(/.test(source));
});
