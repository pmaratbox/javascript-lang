# 0537 — Parse an integer

This lesson uses the parsimmon parser-combinator library. We build an integer parser from combinators: `P.regexp(/[0-9]+/)` matches a run of one-or-more digits, and `.map(Number)` transforms the matched digit string into a JavaScript number. Running the parser on the fixed input `'42'` and reading `.parse(input).value` yields the integer `42`.

## Run

    node main.js
