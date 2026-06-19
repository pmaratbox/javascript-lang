# 0664 — Nested dependency chain

This lesson uses JavaScript's `awilix` DI container to resolve a 3-level dependency chain. `A.v()` returns `a`; `B` declares a constructor dependency `{ a }` and `v()` returns `A.v() + 'b'`; `C` declares `{ b }` and `v()` returns `B.v() + 'c'`. All three classes are registered on the container, then `c` is resolved through PROXY injection mode — awilix recursively wires `A` into `B` and `B` into `C` — and `c.v()` walks the chain to print `abc`.

## Run

    node main.js
