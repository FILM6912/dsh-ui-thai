// Read-only smoke test: import the shipped backend using DSH's real runtime resolver.
// No profile mutation, plugin apply, microphone, daemon or network request.
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { createRequire } = require('node:module');
const assert = require('node:assert/strict');
(async () => {
  const root = path.resolve(__dirname, '..');
  const anchor = path.join(process.env.DSH_INSTALL_DIR, 'package.json');
  const resolve = createRequire(anchor).resolve;
  const { Context } = await import(pathToFileURL(resolve('@deepseek-ai/cordis')).href);
  const { createRuntimeResolution, PluginPackages } = await import(pathToFileURL(resolve('@deepseek-ai/dsh-app-boot')).href);
  const installed = await createRuntimeResolution({ installAnchor: anchor });
  const resolution = {
    profilesDir: installed.profilesDir,
    profileDir: installed.profileDir,
    entries: installed.entries,
    localPackageNames: ['dsh-ui-thai'],
    linkedRoots: [{ name: 'dsh-ui-thai', realPath: root }],
  };
  const ctx = new Context();
  const fiber = ctx.plugin(PluginPackages, { resolution });
  await fiber.inertia;
  assert(ctx.get('pluginPackages'), 'Runtime resolver service must be active');
  try {
    const plugin = await import(pathToFileURL(path.join(root, 'index.js')).href);
    assert.equal(typeof plugin.apply, 'function');
    assert(plugin.Config);
    assert.deepEqual(plugin.inject, ['tools', 'credentials', 'webServer', 'shell', 'settings', 'llm']);
    const { resolveConfig } = await import(pathToFileURL(path.join(root, 'vendor/dsh-voice/lib/schema.js')).href);
    const defaults = resolveConfig({});
    assert.equal(defaults.showDictationButton, true);
    assert.equal(defaults.showHandsFreeButton, true);
    assert.equal(defaults.showMessageButton, false);
    assert.equal(defaults.showDictationModeButton, false);
    const optional = resolveConfig({ showMessageButton: true, showDictationModeButton: true });
    assert.equal(optional.showMessageButton, true);
    assert.equal(optional.showDictationModeButton, true);
    console.log('PASS: actual DSH resolver imports complete vendored Host; Config/injections and two-control defaults verified. No apply/network/profile writes.');
  } finally {
    await fiber.dispose();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
