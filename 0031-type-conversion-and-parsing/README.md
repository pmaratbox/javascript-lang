# 0031 — Type Conversion & Parsing

Parse the string `"42"` into an integer and `"3.5"` into a float, then convert the integer back to a string, printing `int: 42`, `float: 3.5`, and `str: 42`. `parseInt("42", 10)` (the radix is worth passing explicitly) and `parseFloat("3.5")` read leading numbers, while `String(n)` converts back. Unparseable input yields `NaN` rather than an error; `Number(x)` is the stricter whole-string variant.

## Run

    node main.js
