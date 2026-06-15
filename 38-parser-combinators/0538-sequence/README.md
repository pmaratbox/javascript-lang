# 0538 — Sequence

Uses the parsimmon parser-combinator library. The `P.seq` combinator runs `P.string('a')` then `P.string('b')` in sequence, and `.map` combines the two parsed characters into the string `ab`.

## Run

    node main.js
