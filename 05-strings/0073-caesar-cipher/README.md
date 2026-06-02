# 0073 — Caesar Cipher

Encrypt `abc` with a Caesar cipher shifting each letter forward by `1` (wrapping within the alphabet) and print the result: `bcd`. `charCodeAt`/`String.fromCharCode` convert to and from code units; `97` is the code for `a`, and `% 26` wraps the shift.

## Run

    node main.js
