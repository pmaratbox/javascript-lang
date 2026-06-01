# 0054 — Resource Cleanup & Defer

Acquire a resource, use it, and let the language release it automatically at scope exit, printing `open`, `use`, and `close` in that order. `try`/`finally` guarantees the `finally` block runs on the way out. The newer explicit-resource-management `using` declaration (with `Symbol.dispose`) automates this.

## Run

    node main.js
