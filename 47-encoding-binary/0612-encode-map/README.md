# 0612 — Encode a map

Uses the real `@msgpack/msgpack` library to MessagePack-encode the single-key map `{"a": 1}` and print the lowercase hex of the resulting bytes. The map becomes a fixmap (`81`) holding one key/value pair: the key string `"a"` as a fixstr (`a161`) and the value as a positive fixint (`01`), yielding `81a16101`.

## Run

    node main.js
