# 0544 — Expression

The `parsimmon` library builds the parser from combinators: `P.regexp` reads each integer, `.sepBy(P.string('+'))` collects a `'+'`-separated sequence of those integers into an array, and `.map` folds the array with `reduce` to sum it. Running it on the fixed input `10+20+30` yields the total.

## Run

    node main.js
