# 0542 — Map / transform

Using the `parsimmon` parser-combinator library, we parse a run of digits with `P.regexp` and then chain `.map` to TRANSFORM the parsed value: first `Number` turns the matched text into an integer, then a second `.map` doubles it. Parsing `'21'` yields `21`, which maps to `42`.

## Run

    node main.js
