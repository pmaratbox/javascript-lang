# 0613 — Encode null

Uses the real `@msgpack/msgpack` library to MessagePack-encode `null`, then
prints the lowercase hex of the resulting bytes. The MessagePack "nil" value is
a single byte, so `null` becomes `c0`.

## Run

    node main.js
