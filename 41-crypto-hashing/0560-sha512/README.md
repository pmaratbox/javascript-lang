# 0560 — SHA-512

Compute the SHA-512 hash of the string `hello` using Node's built-in `node:crypto` library. `crypto.createHash('sha512')` creates the hash object, `update` feeds it the input bytes, and `digest('hex')` returns the 128-character lowercase hexadecimal digest.

## Run

    node main.js
