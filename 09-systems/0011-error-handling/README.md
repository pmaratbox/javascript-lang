# 0011 — Error Handling

Write a `divide(a, b)` that throws on a zero divisor, then call it on `10 / 2`
(prints the result) and `10 / 0` (prints an error). JavaScript uses
**exceptions**: `throw` raises an `Error`, `try` / `catch` handles it, and
`e.message` is the text.

## Run

    node main.js
