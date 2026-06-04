# 0113 — Result / Either Type

Model success and failure with a Result type: safeDiv(10,2) prints `ok: 5` and safeDiv(1,0) prints `err: divide by zero`. Plain tagged objects with an `ok` discriminant stand in for an algebraic Result type.

## Run

    node main.js
