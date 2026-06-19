# 0610 — Encode an array

Uses the [@msgpack/msgpack](https://github.com/msgpack/msgpack-javascript) library to MessagePack-encode the array `[1, 2, 3]`, then prints the lowercase hex of the resulting bytes: `93010203` (fixarray `93` followed by the fixint bytes `01 02 03`).

## Run

    node main.js
