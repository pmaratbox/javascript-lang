# 0703 — Count unchanged lines

Uses the `diff` (jsdiff) library's `diffLines` to diff A=`[apple, banana, cherry]` against B=`[apple, blueberry, cherry, date]`. Each returned part is flagged `added`, `removed`, or unchanged; summing the lines of the unchanged parts gives the number of EQUAL lines (`apple`, `cherry`) — `2`.

## Run

    node main.js
