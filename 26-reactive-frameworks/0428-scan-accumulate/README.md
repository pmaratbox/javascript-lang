# 0428 — Scan (Running Fold)

Use the library's scan operator to emit the running sum of 1, 2, 3, 4. RxJS's `scan((acc, x) => acc + x, 0)` carries the accumulator across emissions and yields each running total.

## Run

    node main.js
