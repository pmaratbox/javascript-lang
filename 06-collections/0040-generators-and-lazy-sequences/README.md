# 0040 — Generators & Lazy Sequences

Produce an endless lazy sequence of squares and take only the first three, printing `1 4 9`. A `function*` is a generator; each `yield` suspends until the next value is requested. Iterating with `for...of` and `break`ing after three takes a slice of the otherwise-infinite sequence.

## Run

    node main.js
