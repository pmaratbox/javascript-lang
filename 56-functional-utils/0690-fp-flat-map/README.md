# 0690 — Flat map

Map then flatten. Lodash's `_.flatMap` applies `x -> [x, x*10]` to each element of `[1,2,3]` and concatenates the resulting arrays into one flat list, producing `1,10,2,20,3,30`.

## Run

    node main.js
