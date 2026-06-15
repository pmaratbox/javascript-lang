# 0559 — SHA-256

This lesson uses Node's built-in `node:crypto` library to compute a SHA-256 hash. We feed the UTF-8 bytes of the fixed string `hello` into `crypto.createHash('sha256')` and print the digest as a lowercase hex string with no separators.

## Run

    node main.js
