# 0405 — Map Operator

Implement a map operator that transforms each emitted value, applying x => x*2 to a stream of 1, 2, 3, 4. In idiomatic JavaScript the operator is just a function returning a new Observable whose `next` forwards `f(value)` via closures.

## Run

    node main.js
