// One Host entry owns the embedded voice backend; the locale-only half is client-side.
// Public voice identity is retained; the adapter targets this bundle's settings entry.
export { Config, inject, apply } from './vendor/dsh-voice/lib/index.js';
