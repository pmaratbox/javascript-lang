# 0421 — Debounce (Virtual Time)

Implement debounce(window) on a virtual-time scheduler: emit a value only after a quiet gap of `window` ticks with no newer value. In JavaScript the observer is a plain object with `next`/`complete` closures and the scheduler is a hand-rolled priority queue, so no real timers are involved.

## Run

    node main.js
