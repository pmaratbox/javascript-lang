# 0648 — Capacity bound

This lesson uses JavaScript's `lru-cache` library (a strict LRU cache) created with capacity 3. It puts four items (`a`, `b`, `c`, `d`); when the fourth is added the least-recently-used key is evicted, so reading the `size` property shows the count is capped at the capacity (`3`).

## Run

    node main.js
