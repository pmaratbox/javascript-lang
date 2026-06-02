# 0026 — Sets

Build a set from `1, 2, 2, 3` so the duplicate collapses, then print its `size: 3` and whether it contains `2` (`has 2: yes`) and `5` (`has 5: no`). `new Set([...])` removes duplicates, exposes `.size`, and tests membership with `.has` — all roughly O(1). Unlike a plain object — whose integer-like keys are reordered numerically — a `Set` preserves true insertion order and holds members of any type.

## Run

    node main.js
