# 0533 — Map & filter

Using Immutable.js `List`, we transform `[1, 2, 3, 4, 5]` by chaining `filter` (keep evens) and `map` (multiply by 10). Each call returns a brand-new immutable `List`, leaving the original untouched. The result `[20, 40]` is printed space-joined.

## Run

    node main.js
