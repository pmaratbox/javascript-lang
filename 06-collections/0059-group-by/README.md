# 0059 — Group By

Group the words `one`, `two`, `three` by their length and print each length with its words, in ascending order of length: `3:[one,two] 5:[three]`. `(groups[len] ??= []).push(w)` creates the bucket on first use (logical nullish assignment); object keys are strings, so they are mapped to `Number` and sorted numerically.

## Run

    node main.js
