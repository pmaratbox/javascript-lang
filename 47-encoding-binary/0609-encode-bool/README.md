# 0609 — Encode a boolean

Uses the [@msgpack/msgpack](https://github.com/msgpack/msgpack-javascript) library to MessagePack-encode the boolean `true`, then prints the lowercase hex of the resulting bytes: `c3` (the single-byte `true` tag).

## Run

    node main.js
