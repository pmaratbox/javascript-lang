# 0402 — Observer Contract

Demonstrate the observer contract next*-then-terminal: emit 1 and 2, complete, and show that a post-complete next is ignored. A closure-captured `stopped` flag short-circuits `next`/`error`/`complete` once a terminal fires.

## Run

    node main.js
