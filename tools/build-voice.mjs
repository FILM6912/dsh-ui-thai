import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export function factoryDeclaration(source, variable) {
  assert.equal((source.match(/window\.__ModuleLoader__\.load\(/g) || []).length, 1, 'Expected exactly one lazy module registration');
  assert.match(source, /\}\);?\s*$/);
  return source.replace('window.__ModuleLoader__.load(', `const ${variable} = `).replace(/\}\);?\s*$/, '};\n');
}
export function renderVoiceBundle(language, voice) {
  // Only adapt the plugin-manager row key. Locale/settings/routes/credentials retain upstream identity.
  const rowKey = "const ROW_CONFIG_KEY = PKG + '#' + ROW_ID";
  assert.equal(voice.split(rowKey).length, 2, 'Upstream voice row adapter drift');
  voice = voice.replace(rowKey, "const ROW_CONFIG_KEY = 'dsh-ui-thai#local-dsh-thai'");
  for (const [before, after] of [[ 'settingsService.get(NS)', "settingsService.get('local-dsh-thai')" ], [ 'settingsService.bind({ namespace: NS })', "settingsService.bind({ namespace: 'local-dsh-thai' })" ]]) {
    // The synthetic composition fixture need not contain a settings UI.
    if (voice.includes(before)) voice = voice.replace(before, after);
  }
  return `/* Generated unified DSH UI Thai + voice client. See NOTICE and vendor/dsh-voice/LICENSE. */
(() => {
${factoryDeclaration(language, 'languageModule')}
${factoryDeclaration(voice, 'voiceModule')}
window.__ModuleLoader__.load({
  id: 'dsh-ui-thai',
  factory(require) {
    const language = languageModule.factory(require);
    const voice = voiceModule.factory(require);
    return {
      inject: [...new Set([...language.inject, ...voice.inject])],
      apply(ctx, config) {
        language.apply(ctx, config);
        return voice.apply(ctx, config);
      },
    };
  },
});
})();
`;
}
export function buildVoice(check = false) {
  const result = renderVoiceBundle(fs.readFileSync(path.join(root, 'client.js'), 'utf8'), fs.readFileSync(path.join(root, 'vendor/dsh-voice/lib/client.js'), 'utf8'));
  const target = path.join(root, 'bundle-client.js');
  if (check) assert.equal(fs.readFileSync(target, 'utf8'), result, 'Generated bundle-client.js is stale');
  else fs.writeFileSync(target, result);
  return { bytes: Buffer.byteLength(result), modules: 1 };
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) console.log(buildVoice(process.argv.includes('--check')));
