# 0566 — Incremental hashing

This lesson uses Node's built-in `node:crypto` library with the SHA-256 algorithm. We create a hasher, feed it the data in two separate `update` calls (`'foo'` then `'bar'`), and finalize with `digest('hex')`. Streaming the input incrementally yields the same lowercase hex digest as hashing the concatenated string `'foobar'` in one shot.

## Run

    node main.js
