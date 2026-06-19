# 0644 — Recency promotion

This lesson uses JavaScript's `lru-cache` library with a strict LRU cache of capacity 3 (`new LRUCache({ max: 3 })`). After storing `a`, `b`, `c`, a `get("a")` promotes `a` to most-recently-used. Inserting `d` then evicts the least-recently-used key, which is now `b` (not `a`). Looking up `a` returns its value while `b` is a `miss`, so the program prints `1 miss`.

## Run

    node main.js
