# 0672 — Exact decimal comparison

The `bignumber.js` `BigNumber` type represents exact base-10 decimals, so it avoids the binary floating-point rounding that makes `0.1 + 0.2` differ from `0.3` with native `Number`. Here we add `0.1` and `0.2` with `.plus()` and compare the result to `0.3` using `.isEqualTo()`, which prints `true`.

## Run

    node main.js
