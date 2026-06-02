# 0055 — Frequency Count

Count how many times each letter appears in `banana` and print the per-letter counts in alphabetical order: `a:3 b:1 n:2`. A plain object accumulates counts with `(counts[ch] || 0) + 1`; `Object.keys(...).sort()` then orders the letters, since object keys keep insertion order, not sorted order.

## Run

    node main.js
