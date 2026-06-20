# 0702 — Removed line content

Uses the `diff` (jsdiff) library's `diffLines` to diff A=[apple, banana, cherry] against B=[apple, blueberry, cherry, date]. Each returned part is `{ added?, removed?, value }`; the lines whose part is flagged `removed` are collected in document order and printed comma-joined. Only `banana` exists in A but not B, so the output is `banana`.

## Run

    node main.js
