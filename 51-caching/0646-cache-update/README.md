# 0646 — Update a value

This lesson uses JavaScript's `lru-cache` library to create a strict LRU cache (`new LRUCache({ max: 3 })`), then `set("a", 1)` followed by `set("a", 2)` on the same key. Re-putting an existing key overwrites its stored value rather than adding a new entry, so `get("a")` returns the latest value and the program prints `2`.

## Run

    node main.js
