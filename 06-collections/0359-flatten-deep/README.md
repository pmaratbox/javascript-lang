# 0359 — Flatten Deeply

Flatten the arbitrarily nested structure [1,[2,[3,4]],5] into `1 2 3 4 5`. A recursive generator with `yield*` walks nested arrays detected via `Array.isArray`.

## Run

    node main.js
