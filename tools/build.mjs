import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = name => JSON.parse(fs.readFileSync(path.join(root, name), 'utf8'));
export function sources() {
  const core = read('sources/en.json');
  const previews = read('sources/previews-en.json').dictionaries;
  const codex = read('sources/codex-en.json')['settings.openai-codex'];
  return { ...core, ...previews, 'settings.openai-codex': codex };
}
export function translations() {
  const result = {};
  for (const file of fs.readdirSync(path.join(root, 'translations')).filter(n => n.endsWith('.json')).sort()) {
    for (const [ns, dict] of Object.entries(read('translations/' + file))) {
      assert(!Object.hasOwn(result, ns), `Duplicate namespace ${ns} in ${file}`);
      result[ns] = dict;
    }
  }
  return result;
}
export const placeholders = text => (text.match(/\{[^{}]+\}/g) ?? []).sort();
export function validate(en, th) {
  assert.deepEqual(Object.keys(th).sort(), Object.keys(en).sort(), 'Namespace coverage');
  for (const [ns, dict] of Object.entries(en)) {
    assert.deepEqual(Object.keys(th[ns]).sort(), Object.keys(dict).sort(), `${ns} key coverage`);
    for (const [key, value] of Object.entries(dict)) {
      const translated = th[ns][key];
      assert.equal(typeof translated, 'string', `${ns}.${key} must be a string`);
      assert(translated.length > 0 || value.length === 0, `${ns}.${key} empty translation`);
      assert(!/[\u200b\ufeff]/u.test(translated), `${ns}.${key} invisible marker`);
      assert.deepEqual(placeholders(translated), placeholders(value), `${ns}.${key} placeholders`);
    }
  }
}
export function render(dicts) {
  const ordered = Object.fromEntries(Object.keys(dicts).sort().map(ns => [ns,
    Object.fromEntries(Object.keys(dicts[ns]).sort().map(key => [key, dicts[ns][key]]))]));
  return `/* Generated Thai dictionary bundle. Codex-derived strings are translated and\n * reformatted from dsh-codex-connect 0.2.0-alpha.15, Copyright 2026 Yan-Zero\n * and Frank Song, Apache-2.0. See NOTICE and licenses/Apache-2.0.txt.\n * Other portions are MIT; see LICENSE.\n */\nwindow.__ModuleLoader__.load({\n  id: 'dsh-ui-thai',\n  factory() {\n    const dictionaries = ${JSON.stringify(ordered, null, 2)};\n    return {\n      inject: ['locale'],\n      apply(ctx) {\n        ctx.effect(() => {\n          const disposers = [];\n          const dispose = () => {\n            for (const release of disposers.splice(0).reverse()) release();\n          };\n          try {\n            disposers.push(ctx.locale.addLanguage({ id: 'th', label: 'ไทย', fallback: 'en' }));\n            for (const [namespace, dictionary] of Object.entries(dictionaries)) {\n              disposers.push(ctx.locale.register(namespace, 'th', dictionary));\n            }\n          } catch (error) {\n            dispose();\n            throw error;\n          }\n          return dispose;\n        }, 'dsh-thai: language and dictionaries');\n      },\n    };\n  },\n});\n`;
}
export function build(check = false) {
  const en = sources(), th = translations();
  validate(en, th);
  const output = render(th);
  const target = path.join(root, 'client.js');
  if (check) assert.equal(fs.readFileSync(target, 'utf8'), output, 'Generated client.js is stale');
  else fs.writeFileSync(target, output);
  return { namespaces: Object.keys(en).length, keys: Object.values(en).reduce((n, d) => n + Object.keys(d).length, 0) };
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) console.log(build(process.argv.includes('--check')));
