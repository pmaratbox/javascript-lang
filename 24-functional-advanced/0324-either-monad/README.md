# 0324 — Either Monad

Chain Either computations: a successful divide chain yields 2, and a divide-by-zero yields an error, printing `2 err`. `bind` carries the Right value forward and short-circuits to Left.

## Run

    node main.js
