# 0642 — Cache miss

This lesson uses JavaScript's `lru-cache` library (a strict LRU cache). Looking up a key that was never stored returns `undefined` from `LRUCache.get`, which we treat as a cache miss and print `miss`.

## Run

    node main.js
