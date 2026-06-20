# 0701 — Added line content

Uses the `diff` (jsdiff) library's `diffLines` to compare two fixed line-lists (A -> B). Each returned part is tagged `added`, `removed`, or unchanged; we collect the lines from the `added` parts in document (B) order and print them comma-joined.

## Run

    node main.js
