import fs from 'node:fs';
import assert from 'node:assert/strict';
const raw = JSON.parse(fs.readFileSync(process.argv[2] || 'verification/voice-pack.json', 'utf8').replace(/^\uFEFF/, ''));
const pack = Array.isArray(raw) ? raw[0] : raw['dsh-ui-thai'];
assert(pack);
const paths = pack.files.map(f => f.path);
for (const p of paths) assert(!/(^dsh-voice\/|(^|\/)\.git(\/|$)|(^|\/)node_modules\/)/.test(p), 'Unwanted package file ' + p);
for (const p of ['bundle-client.js','voice-settings-adapter.js','index.js','vendor/dsh-voice/lib/client.js','vendor/dsh-voice/lib/index.js','vendor/dsh-voice/lib/schema.js','vendor/dsh-voice/lib/server-routes.js','vendor/dsh-voice/LICENSE','vendor/dsh-voice/PROVENANCE.json']) assert(paths.includes(p), 'Missing runtime/license ' + p);
console.log({ name: pack.name, version: pack.version, size: pack.size, unpackedSize: pack.unpackedSize, files: paths.length });
