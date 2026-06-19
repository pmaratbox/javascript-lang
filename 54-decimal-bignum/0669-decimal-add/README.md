# 0669 — Exact decimal addition

The `bignumber.js` `BigNumber` type represents exact decimal values, avoiding the binary-floating-point rounding that makes `0.1 + 0.2` come out as `0.30000000000000004` with native `Number`. Here we construct two `BigNumber`s from strings and use `.plus()` to add them, printing the exact result `0.3`.

## Run

    node main.js
