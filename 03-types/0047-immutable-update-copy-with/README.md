# 0047 — Immutable Update (Copy-with)

Make a copy of the point `(1, 2)` with its `x` changed to `9`, leaving the original intact, and print `original: (1, 2)` then `updated: (9, 2)`. Object spread `{ ...p1, x: 9 }` copies `p1`'s own properties into a fresh object and overrides `x`. `Object.freeze` keeps the original read-only; the spread never mutates it.

## Run

    node main.js
