# 0035 — Ranges & Slicing

From the list `[10, 20, 30, 40, 50]`, take the sub-sequence at indices 1 through 4 (exclusive) and print `slice: 20 30 40`. `Array.prototype.slice(1, 4)` returns a shallow copy of the half-open range `[1, 4)`. It accepts negative indices (counting from the end) and never mutates the original, unlike `splice`.

## Run

    node main.js
