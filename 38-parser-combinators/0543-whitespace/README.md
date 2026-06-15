# 0543 — Whitespace handling

The `parsimmon` library combinator `.trim(P.optWhitespace)` wraps the integer parser so optional leading and trailing whitespace is consumed before and after the value, leaving just the parsed number.

## Run

    node main.js
