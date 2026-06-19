# 0607 — Encode an integer

Uses the real `@msgpack/msgpack` library to MessagePack-encode the integer `42`,
then prints the lowercase hex of the resulting bytes. Small non-negative
integers encode as a single "positive fixint" byte, so `42` becomes `2a`.

## Run

    node main.js
