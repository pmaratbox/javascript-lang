# 0020 — Pattern Matching

Match `n` against the literal patterns `1` and `2` with a wildcard fallback, mapping `1`, `2`, and `5` to `one`, `two`, and `many`. `switch` compares with strict equality (`===`) and falls through unless each `case` breaks or returns; here every arm returns, so no `break` is needed, and `default` is the catch-all. JavaScript has no structural pattern-matching construct in the language.

## Run

    node main.js
