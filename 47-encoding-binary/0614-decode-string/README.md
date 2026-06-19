# 0614 — Decode bytes

Uses the [@msgpack/msgpack](https://github.com/msgpack/msgpack-javascript) library to DECODE a fixed MessagePack byte sequence back into a value. The hex string `a568656c6c6f` (fixstr `a5` followed by the UTF-8 bytes of `hello`) is converted to bytes and decoded, printing the resulting value: `hello`.

## Run

    node main.js
