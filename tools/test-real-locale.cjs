const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
if (!process.versions.electron) throw Error('Run with tools/electron.ps1 for ASAR access');
const localeDir = path.dirname(require.resolve('@deepseek-ai/dsh-client-locale/package.json', { paths: [process.env.DSH_INSTALL_DIR] }));
let localeModule;
const stub = new Proxy(function () { return stub; }, { get: () => stub });
vm.runInNewContext(fs.readFileSync(path.join(localeDir, 'lib/client.js'), 'utf8'), {
  window: { __ModuleLoader__: { load: entry => { localeModule = entry.factory(() => stub); } } },
  console, navigator: { languages: ['en'], language: 'en' },
});
assert.equal(typeof localeModule.LocaleRuntime, 'function');
let plugin;
vm.runInNewContext(fs.readFileSync('client.js', 'utf8'), {
  window: { __ModuleLoader__: { load: entry => { plugin = entry.factory(); } } },
});
const effects = [];
const ctx = { effect(run) { effects.push(run()); }, emit() {} };
const locale = new localeModule.LocaleRuntime(ctx);
ctx.locale = locale;
const baseline = locale.getLocale().active;
const releaseEnglish = locale.register('common', 'en', { cancel: 'Cancel', unprovided: 'English fallback', hello: 'Hello {name}' });
plugin.apply(ctx);
assert.equal(locale.getLocale().active, baseline, 'apply preserves user selection');
assert(locale.getLocale().locales.some(l => l.id === 'th' && l.label === 'ไทย'));
locale.setLocale('th');
assert.equal(locale.bind('common')('cancel'), 'ยกเลิก');
assert.equal(locale.bind('common')('unprovided'), 'English fallback');
assert.equal(locale.bind('conversation')('detail.location', { line: 3, column: 8 }), 'บรรทัด 3 คอลัมน์ 8');
assert.equal(locale.bind('common')('hello', { name: 'User' }), 'Hello User');
let translatedKeys = 0;
for (const file of fs.readdirSync('translations').filter(file => file.endsWith('.json'))) {
  const namespaces = JSON.parse(fs.readFileSync(path.join('translations', file), 'utf8'));
  for (const [namespace, dictionary] of Object.entries(namespaces)) {
    const translate = locale.bind(namespace);
    for (const [key, expected] of Object.entries(dictionary)) {
      assert.equal(translate(key), expected, `${namespace}.${key}`);
      const parameters = Object.fromEntries([...expected.matchAll(/\{(\w+)\}/g)].map(([, name]) => [name, `[${name}:ทดสอบ]`]));
      assert.equal(translate(key, parameters), expected.replace(/\{(\w+)\}/g, (_, name) => parameters[name]), `${namespace}.${key} interpolation`);
      translatedKeys++;
    }
  }
}
assert.equal(translatedKeys, 3965);
effects.pop()();
assert(!locale.getLocale().locales.some(l => l.id === 'th'));
assert.equal(locale.bind('common')('cancel'), 'Cancel');
plugin.apply(ctx);
locale.setLocale('th');
assert.equal(locale.bind('settings.locale')('language.title'), 'ภาษา');
effects.pop()();
releaseEnglish();
console.log('PASS real installed LocaleRuntime: all 3965 key lookups and interpolations across 68 namespaces, selection preserved, English fallback, disposal and remount. UI imports stubbed; real locale implementation unchanged.');
