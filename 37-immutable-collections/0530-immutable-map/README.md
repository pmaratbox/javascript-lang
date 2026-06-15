# 0530 — Immutable map

The `immutable` library (immutable.js) provides a persistent `Map`. Calling `.set(key, value)` returns a brand-new map with the added entry while the original map stays unchanged, so structural sharing gives you cheap copies without mutation.

## Run

    node main.js
