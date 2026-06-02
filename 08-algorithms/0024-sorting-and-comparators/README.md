# 0024 — Sorting & Comparators

Sort `[3, 1, 2]` ascending, then again with a custom comparator that reverses the order, printing `asc: 1 2 3` and `desc: 3 2 1`. `Array.prototype.sort` mutates in place and sorts lexicographically by default — `[10, 2]` sorts to `[10, 2]` — so a numeric comparator `(a, b) => a - b` is required, and `b - a` reverses it. Spreading `[...nums]` sorts a copy.

## Run

    node main.js
