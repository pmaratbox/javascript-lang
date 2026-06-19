# 0671 — Exact decimal subtraction

The `bignumber.js` `BigNumber` type performs exact base-10 decimal arithmetic, avoiding the binary floating-point rounding that makes `1.0 - 0.1` imprecise with native `Number`. Here we use the `.minus()` operation to subtract `1.0 - 0.1`, then call `.toString()` to print the exact result `0.9`.

## Run

    node main.js
