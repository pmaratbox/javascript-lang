# 0665 — Big integer addition

JavaScript's native `BigInt` type holds arbitrary-precision integers (written with an `n` suffix, e.g. `12345678901234567890n`). Here we use the `+` operator to add two integers that overflow the 64-bit `Number` range, then call `.toString()` to print the exact result.

## Run

    node main.js
