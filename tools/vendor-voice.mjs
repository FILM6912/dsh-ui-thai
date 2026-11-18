import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.resolve(root, process.argv[2] || 'dsh-voice');
const target = path.join(root, 'vendor/dsh-voice');
if (source === target) throw new Error('Source must be the reviewed upstream worktree, not vendor output');
const manifest = JSON.parse(fs.readFileSync(path.join(source, 'package.json'), 'utf8'));
if (manifest.name !== '@goodandready/dsh-voice') throw new Error('Unexpected voice source package');
const commit = execFileSync('git', ['-C', source, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
const files = ['package.json', 'cordis.patch.yml', 'LICENSE', 'README.md', 'README.ru.md', 'README.zh.md',
  ...fs.readdirSync(path.join(source, 'lib')).filter(n => n.endsWith('.js')).map(n => 'lib/' + n),
  ...fs.readdirSync(path.join(source, 'locale')).filter(n => n.endsWith('.json')).map(n => 'locale/' + n)].sort();
const hashes = {};
for (const file of files) {
  const from = path.join(source, file), to = path.join(target, file);
  if (fs.lstatSync(from).isSymbolicLink()) throw new Error('Refusing symlink: ' + file);
  let content = fs.readFileSync(from);
  if (file === 'lib/index.js') {
    let text = content.toString('utf8');
    const before = 'settingsService = sctx.settings';
    if (text.split(before).length !== 2) throw new Error('Upstream settings adapter drift');
    text = "import { adaptVoiceSettings } from '../../../voice-settings-adapter.js'\n" + text.replace(before, 'settingsService = adaptVoiceSettings(sctx.settings)');
    content = Buffer.from(text);
  }
  // The upstream update button must update this bundle, never reinstall standalone voice.
  if (file === 'lib/server-routes.js') {
    let text = content.toString('utf8');
    for (const [before, after] of [
      ["packageName: '@goodandready/dsh-voice'", "packageName: 'dsh-ui-thai'"],
      ["new URL('../package.json', import.meta.url)", "new URL('../../../package.json', import.meta.url)"],
    ]) {
      if (text.split(before).length !== 2) throw new Error('Upstream update adapter drift: ' + before);
      text = text.replace(before, after);
    }
    content = Buffer.from(text);
  }
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.writeFileSync(to, content);
  hashes[file] = createHash('sha256').update(content).digest('hex');
}
fs.writeFileSync(path.join(target, 'PROVENANCE.json'), JSON.stringify({
  repository: 'https://github.com/GooDAnDReaDY/dsh-voice',
  upstreamCommit: commit,
  upstreamVersion: manifest.version,
  license: 'MIT',
  copyright: 'Copyright (c) 2026 GooDAnDReaDY',
  note: 'Snapshot of reviewed customized worktree, not an unmodified upstream release.',
  modifications: ['Client: two default controls, opt-in continuous conversation gated on real AI turn boundaries, bounded silent recording rotation, focus/playback pauses, live composer owner/race guards and noise-gated amplitude speech detection', 'Minimal Thai/English voice settings with OpenAI-compatible model discovery, shortcut and composer visibility controls', 'Host: credential-record-backed API settings and authenticated model discovery; API secrets excluded from configuration', 'Host settings adapter maps public dsh-voice namespace to local-dsh-thai Loader entry storage', 'Updater targets dsh-ui-thai root package instead of standalone voice'],
  files: hashes,
}, null, 2) + '\n');
console.log(`Vendored ${files.length} runtime/provenance files from ${commit}; no nested git, tests or node_modules copied.`);
