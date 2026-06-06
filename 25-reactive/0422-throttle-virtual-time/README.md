# 0422 — Throttle (Virtual Time)

Implement throttle(window) (leading edge) on a virtual-time scheduler: emit a value, then suppress further values for `window` ticks. In JavaScript a plain object with `next`/`error`/`complete` methods is an idiomatic observer, so the operator is just a closure that wraps one.

## Run

    node main.js
