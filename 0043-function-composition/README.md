# 0043 — Function Composition

Compose `inc` (add one) and `twice` (multiply by two) into one function and apply it to `3`, so `inc(twice(3))` prints `7`. Arrow functions make composition concise: `compose = (f, g) => (x) => f(g(x))` returns a new function that applies `g` then `f`. Closures capture `f` and `g` by reference.

## Run

    node main.js
