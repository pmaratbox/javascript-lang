# 0540 — Many (repetition)

Using the parsimmon parser-combinator library, `P.string('a').many()` applies the single-character parser zero or more times, collecting each match into an array. Run on the fixed input `'aaaa'`, it yields four matches, so the parsed array length is `4`.

## Run

    node main.js
