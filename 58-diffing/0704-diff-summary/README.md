# 0704 — Diff summary

Uses the `diff` (jsdiff) library's `diffLines` to diff A=`[apple, banana, cherry]` against B=`[apple, blueberry, cherry, date]`. Each returned part is flagged `added`, `removed`, or unchanged; counting their lines yields a one-line summary of `<added> <removed> <unchanged>` — `2 1 2` (added `blueberry`, `date`; removed `banana`; unchanged `apple`, `cherry`).

## Run

    node main.js
