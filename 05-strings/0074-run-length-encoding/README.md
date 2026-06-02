# 0074 — Run-Length Encoding

Run-length encode the string `aaabbc` (each run of a repeated character becomes the character followed by its count), printing `a3b2c1`. The inner `while` consumes a run of equal characters; `ch + count` appends the letter and its tally.

## Run

    node main.js
