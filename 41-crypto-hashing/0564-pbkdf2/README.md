# 0564 — PBKDF2

This lesson uses the built-in `node:crypto` library to derive a key with the PBKDF2-HMAC-SHA256 algorithm. We call `crypto.pbkdf2Sync` over the password `'password'` and salt `'salt'` with 1000 iterations to produce a 32-byte derived key, then print it as lowercase hex.

## Run

    node main.js
