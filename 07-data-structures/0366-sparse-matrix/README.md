# 0366 — Sparse Matrix

Store only nonzero entries; with (1,1)=5 set, read (1,1) (5) and (0,0) (0), printing `5 0`. A `Map` keyed by a `"row,col"` string returns 0 for any absent cell via the `??` operator.

## Run

    node main.js
