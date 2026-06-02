# 0017 — Iterators

Take the numbers 1 through 5, keep the even ones, double each, and add them up — a filter, then a map, then a reduce — printing the final sum. JavaScript arrays carry `filter`, `map`, and `reduce` as methods, so the pipeline reads as a fluent chain where each step returns a new array. `reduce` takes the combining function and an initial accumulator (`0`) — the explicit seed makes the sum well-defined even for an empty array.

## Run

    node main.js
