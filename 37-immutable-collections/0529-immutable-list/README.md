# 0529 — Immutable list

This lesson uses the Immutable.js `List`, a persistent immutable collection. We build a `List([1, 2, 3])` and call `.push(4)`, which does not mutate the original; instead it RETURNS A NEW `List` containing the appended element. Printing the new list followed by the original (both space-joined with `.join(' ')`) shows the new list as `1 2 3 4` while the original stays unchanged as `1 2 3`.

## Run

    node main.js
