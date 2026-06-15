# 0561 — SHA-1

Compute the SHA-1 hash of the string `hello` using Node's built-in `node:crypto` module. `crypto.createHash('sha1')` creates a hash object, `.update('hello')` feeds it the input bytes, and `.digest('hex')` returns the digest as a lowercase hex string with no separators. SHA-1 is legacy and cryptographically broken, but it is shown here as a deterministic digest example.

## Run

    node main.js
