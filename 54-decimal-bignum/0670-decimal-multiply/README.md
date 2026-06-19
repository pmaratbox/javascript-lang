# 0670 — Exact decimal multiplication

This lesson uses the `BigNumber` exact-decimal type from `bignumber.js` to multiply `1.1 * 1.1`. Unlike IEEE-754 binary floats (where `1.1 * 1.1` yields `1.2100000000000002`), `BigNumber` multiplies in decimal and gives the exact result `1.21`.

## Run

    node main.js
