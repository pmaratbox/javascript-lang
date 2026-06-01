# 0044 — Generic Constraints

Write a generic `largest(a, b)` that requires an ordered type, then call it on integers (3 and 9) and on strings (apple and pear), printing `9` and `pear`. JavaScript has no generics or type constraints; `largest` is fully dynamic and `>` happens to order both numbers and strings. TypeScript adds the static `<T>` machinery on top.

## Run

    node main.js
