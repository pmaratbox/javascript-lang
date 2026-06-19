# 0688 — Group by

Uses lodash's `_.groupBy` to partition a list into buckets keyed by a function's result. Grouping `[1,2,3,4,5,6]` by parity yields `{even:[2,4,6], odd:[1,3,5]}`; we then sort the keys and print each as `key:v1,v2,...` joined by `;`.

## Run

    node main.js
