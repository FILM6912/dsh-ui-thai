const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
if (!process.versions.electron) throw Error('Run using tools/electron.ps1 for installed DSH ASAR access');
assert(process.env.THAI_HUB_CLIENT, 'Set THAI_HUB_CLIENT to the native-locale Hub client artifact');
const root = path.resolve(__dirname, '..');
const expected = JSON.parse(fs.readFileSync(path.join(root, 'translations/hub.json'), 'utf8'))['dsh-plugin'];
const localeDir = path.dirname(require.resolve('@deepseek-ai/dsh-client-locale/package.json', { paths: [process.env.DSH_INSTALL_DIR] }));
const unusedUI = new Proxy(function () { return unusedUI; }, { get: () => unusedUI });
let localeModule;
vm.runInNewContext(fs.readFileSync(path.join(localeDir, 'lib/client.js'), 'utf8'), {
 window: { __ModuleLoader__: { load(entry) { localeModule = entry.factory(() => unusedUI); } } },
 console, navigator: { languages: ['en'], language: 'en' },
});
function load(file, id) {
 let entry;
 const sandbox = { window: { __ModuleLoader__: { load(value) { entry = value; } } } };
 vm.runInNewContext(fs.readFileSync(file, 'utf8'), sandbox);
 assert.equal(entry.id, id);
 return { plugin: entry.factory(name => { assert.equal(name, 'react'); return {}; }), sandbox };
}
function checkAll(locale) {
 const t = locale.bind('dsh-plugin');
 for (const [key, value] of Object.entries(expected)) {
   assert.equal(t(key), value, key);
   const params = Object.fromEntries([...value.matchAll(/\{(\w+)\}/g)].map(([, name]) => [name, 'ทดสอบ:' + name]));
   assert.equal(t(key, params), value.replace(/\{(\w+)\}/g, (_, name) => params[name]), key + ' interpolation');
 }
}
for (const order of ['pack-first', 'hub-first']) {
 const locale = new localeModule.LocaleRuntime({ effect() {}, emit() {} });
 const packEffects = [], hubEffects = [];
 const pack = load(path.join(root, 'client.js'), 'dsh-ui-thai');
 const hub = load(process.env.THAI_HUB_CLIENT, 'dsh-plugin');
 let english;
 const packContext = { locale, effect(run) { packEffects.push(run()); } };
 const hubContext = {
   locale: {
     register(namespace, dictionaries) {
       assert.equal(namespace, 'dsh-plugin');
       assert.deepEqual(Object.keys(dictionaries).sort(), ['en', 'zh'], 'Thai must live in the language pack only');
       assert.deepEqual(Object.keys(dictionaries.en).sort(), Object.keys(expected).sort());
       english = dictionaries.en;
       return locale.register(namespace, dictionaries);
     },
     bind: namespace => locale.bind(namespace),
     addLanguage() { assert.fail('Hub must not own the Thai language'); },
   },
   effect(run) { hubEffects.push(run()); },
   slots: { inject() {} },
 };
 const dispose = effects => { while (effects.length) effects.pop()?.(); };
 if (order === 'pack-first') { pack.plugin.apply(packContext); hub.plugin.apply(hubContext); }
 else { hub.plugin.apply(hubContext); pack.plugin.apply(packContext); }
 assert.equal(locale.getSnapshot().active, 'en', 'Mounting must not change user language');
 locale.setLocale('th');
 checkAll(locale);
 dispose(hubEffects);
 checkAll(locale);
 hub.plugin.apply(hubContext);
 checkAll(locale);
 dispose(packEffects);
 assert.equal(locale.bind('dsh-plugin')('nav'), english.nav, 'Pack removal must fall back to Hub English');
 assert(!locale.getSnapshot().locales.some(language => language.id === 'th'));
 pack.plugin.apply(packContext);
 locale.setLocale('th');
 checkAll(locale);
 dispose(hubEffects);
 dispose(packEffects);
 assert.equal(hub.sandbox.__DSH_PLUGIN_CSS__.length, 0);
 console.log(`PASS ${order}: all ${Object.keys(expected).length} Hub keys/interpolations from dsh-ui-thai only, remount/disposal/fallback`);
}
console.log('Installed LocaleRuntime is real; unused UI imports stubbed. No browser rendering or durable preference persistence claimed.');
