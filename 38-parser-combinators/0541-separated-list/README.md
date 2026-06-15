# 0541 — Separated list

The `parsimmon` library builds parsers from combinators. Here the `.sepBy(separator)` combinator parses zero or more integers separated by a `','`, producing an array of values; we then sum the parsed numbers.

## Run

    node main.js
