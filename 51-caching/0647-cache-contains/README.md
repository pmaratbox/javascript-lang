# 0647 — Contains key

This lesson uses JavaScript's `lru-cache` library (a strict LRU cache, `new LRUCache({ max: 3 })`). After `set("a", 1)`, the program checks membership with `has("a")` and `has("x")`. Unlike `get`, `has` peeks without promoting recency. The present key reports `true` and the absent key reports `false`, so the program prints `true false`.

## Run

    node main.js
