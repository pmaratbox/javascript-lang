# 0611 — Encode a nested array

Uses the real `@msgpack/msgpack` library to MessagePack-encode the nested array `[[1,2],[3,4]]` and print the lowercase hex of the resulting bytes. Each inner array becomes a fixarray (`92`) of two positive fixints, wrapped in an outer fixarray (`92`), yielding `92920102920304`.

## Run

    node main.js
