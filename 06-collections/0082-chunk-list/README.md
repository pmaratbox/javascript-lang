# 0082 — Chunk a List

Split the list `1, 2, 3, 4, 5, 6, 7` into chunks of `3` and print each chunk on its own line: `1 2 3`, `4 5 6`, `7`. `slice(i, i+size)` extracts each chunk; `slice` clamps past the end, so the last chunk is simply shorter.

## Run

    node main.js
