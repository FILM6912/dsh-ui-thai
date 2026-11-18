import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { build, sources, translations, validate, render, root } from '../tools/build.mjs';

const source = fs.readFileSync(new URL('../client.js', import.meta.url), 'utf8');
function plugin() {
  let registration;
  vm.runInNewContext(source, { window: { __ModuleLoader__: { load: entry => { registration = entry; } } } });
  assert.equal(registration.id, '@local/dsh-thai');
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
  assert.deepEqual(build(true), { namespaces: 67, keys: 3491 });
  assert.equal(render(translations()), render(translations()));
});
test('factory is side-effect free and plugin registers, disposes and remounts', () => {
  const pack = plugin(); const ctx = harness();
  pack.apply(ctx);
  assert.equal(ctx.languages.size, 1); assert.equal(ctx.dictionaries.size, 67);
  assert.equal(ctx.dictionaries.get('common').cancel, 'ยกเลิก');
  assert.equal(ctx.dictionaries.get('settings.locale')['language.title'], 'ภาษา');
  ctx.effects.pop()(); assert.equal(ctx.languages.size, 0); assert.equal(ctx.dictionaries.size, 0);
  pack.apply(ctx); assert.equal(ctx.dictionaries.size, 67);
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
test('manifest exposes native client, locales, icon and patch without install scripts', () => {
  const manifest = JSON.parse(fs.readFileSync(root + '/package.json', 'utf8'));
  assert.equal(manifest.name, '@local/dsh-thai');
  assert.equal(manifest.engines.dsh, '0.2.2-rc.3');
  assert.deepEqual(manifest.dsh.client.inject, ['@deepseek-ai/dsh-client-locale']);
  assert.equal(manifest.dsh.client.immediately, true);
  assert(!manifest.scripts.postinstall && !manifest.scripts.preinstall);
  for (const p of ['./index.js','./client.js','./icon.svg','./cordis.patch.yml','./locale/en.json','./locale/th.json']) assert(fs.existsSync(root + '/' + p));
  for (const locale of ['en','th']) {
    const metadata = JSON.parse(fs.readFileSync(root + '/locale/' + locale + '.json','utf8')).meta;
    assert(metadata.title && metadata.description); assert(!metadata.detail);
  }
  assert(!/document\.|MutationObserver|setInterval|setLocale|fetch\(/.test(source));
});
