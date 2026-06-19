# 0643 — LRU eviction

This lesson uses JavaScript's `lru-cache` library with a strict LRU cache of capacity 3. Putting `a=1, b=2, c=3, d=4` with no intervening reads overflows the cache, so the least-recently-used key `a` is evicted. Looking up `a` returns `undefined` (printed as `miss`) while `d` is still present.

## Run

    node main.js
