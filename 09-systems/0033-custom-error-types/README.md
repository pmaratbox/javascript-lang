# 0033 — Custom Error Types

Define a custom error, raise it from a `check` that rejects values over `100`, catch it for the input `200`, and print `error: value too large`. Custom errors extend the built-in `Error` class (which carries a `message`); `throw` raises and a single untyped `catch (e)` handles it. Re-check the type with `instanceof` when several errors are possible.

## Run

    node main.js
