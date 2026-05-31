# 0018 — Closures

Build a counter that captures a private count starting at zero; each call to the returned function increments the count and returns it, so calling it twice prints 1 then 2. JavaScript closures are central to the language: the returned arrow function keeps a live reference to `count` (a block-scoped `let`), not a copy, so each call mutates the same variable. Because nothing else can reach `count`, it acts as truly private state — a common pattern for encapsulation before classes existed.

## Run

    node main.js
