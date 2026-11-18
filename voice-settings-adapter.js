// DSH 0.2.2 settings are keyed by Loader entry id, not the voice locale/API namespace.
// Keep the upstream backend contract while directing every read/write to this bundle.
export const VOICE_SETTINGS_ENTRY = 'local-dsh-thai';
export function adaptVoiceSettings(service) {
  if (!service) return service;
  const entry = ns => ns === 'dsh-voice' ? VOICE_SETTINGS_ENTRY : ns;
  const adapted = {
    describe(...args) {
      return service.describe(...args).filter(row => row.ns !== 'dsh-voice').map(row => row.ns === VOICE_SETTINGS_ENTRY
        ? { ...row, ns: 'dsh-voice', config: row.value ?? row.config }
        : row);
    },
  };
  for (const method of ['replace', 'update']) {
    if (typeof service[method] === 'function') adapted[method] = (ns, ...args) => service[method](entry(ns), ...args);
  }
  return adapted;
}
