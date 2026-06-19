# 0608 — Encode a string

Uses the [@msgpack/msgpack](https://github.com/msgpack/msgpack-javascript) library to MessagePack-encode the string `"hello"`, then prints the lowercase hex of the resulting bytes: `a568656c6c6f` (fixstr `a5` followed by the UTF-8 bytes of `hello`).

## Run

    node main.js
