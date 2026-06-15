# 0539 — Alternative

Uses the parsimmon parser-combinator library. The `.or` combinator builds an alternative (choice) parser that tries `P.string('cat')` first and falls back to `P.string('dog')`, parsing the input `dog`.

## Run

    node main.js
