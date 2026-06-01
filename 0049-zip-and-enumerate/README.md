# 0049 — Zip & Enumerate

Pair the letters `a, b, c` with the numbers `1, 2, 3` position by position, formatting each pair as `key=value` and printing `a=1 b=2 c=3`. JavaScript has no `zip`, so `map` with its index argument `(k, i)` reaches into the parallel array. Its enumerate counterpart, `entries()`, gives `[index, value]` pairs.

## Run

    node main.js
