import assert from 'node:assert/strict';
import fs from 'node:fs';
import { gunzipSync } from 'node:zlib';
import vm from 'node:vm';

const archivePath = process.argv[2];
assert(archivePath, 'Usage: node tools/verify-package.mjs <npm-pack.tgz>');
const archive = gunzipSync(fs.readFileSync(archivePath));
const files = new Map();
for (let offset = 0; offset + 512 <= archive.length;) {
  const header = archive.subarray(offset, offset + 512);
  if (header.every(byte => byte === 0)) break;
  const text = (start, length) => header.subarray(start, start + length).toString('utf8').split('\0')[0];
  const name = text(0, 100);
  const size = Number.parseInt(text(124, 12).trim(), 8);
  assert(Number.isSafeInteger(size) && size >= 0, `Invalid size for ${name}`);
  assert.equal(text(345, 155), '', 'Unexpected tar prefix');
  assert(name.startsWith('package/') && !name.includes('..'), `Unsafe archive path ${name}`);
  assert(['0', ''].includes(text(156, 1)), `Only regular files allowed: ${name}`);
  assert(!files.has(name.slice('package/'.length)), `Duplicate archive entry ${name}`);
  assert(offset + 512 + size <= archive.length, `Truncated archive entry ${name}`);
  files.set(name.slice('package/'.length), archive.subarray(offset + 512, offset + 512 + size).toString('utf8'));
  offset += 512 + Math.ceil(size / 512) * 512;
}
const expectedFiles = ['LICENSE', 'NOTICE', 'PUBLISHING.md', 'PLUGIN-HUB.md', 'README.md', 'client.js', 'compat/plugin-hub-native-locale.patch', 'cordis.patch.yml', 'icon.svg', 'index.js', 'licenses/Apache-2.0.txt', 'licenses/DSH-Plugin-Hub-MIT.txt', 'locale/en.json', 'locale/th.json', 'package.json'];
assert.deepEqual([...files.keys()].sort(), expectedFiles.sort());
const manifest = JSON.parse(files.get('package.json'));
assert.equal(manifest.name, 'dsh-ui-thai');
assert.notEqual(manifest.private, true);
assert.equal(new URL(manifest.publishConfig.registry).href, 'https://registry.npmjs.org/');
assert.equal(manifest.publishConfig.access, 'public');
assert.match(files.get('cordis.patch.yml'), /^\s+name:\s*['"]?dsh-ui-thai['"]?\s*$/m);
let entry;
vm.runInNewContext(files.get('client.js'), { window: { __ModuleLoader__: { load(value) { entry = value; } } } });
assert.equal(entry.id, manifest.name);
let count = 0;
let keys = 0;
let cleanup;
let releases = 0;
entry.factory().apply({
  effect(run) { cleanup = run(); },
  locale: {
    addLanguage(language) { assert.equal(language.id, 'th'); return () => { releases++; }; },
    register(namespace, locale, dictionary) { assert.equal(locale, 'th'); count++; keys += Object.keys(dictionary).length; return () => { releases++; }; },
  },
});
assert.equal(count, 68);
assert.equal(keys, 3965);
cleanup();
assert.equal(releases, 69);
console.log(`PASS packed artifact: ${files.size} files, matching package/module/patch names, ${keys} keys, lifecycle cleanup`);
