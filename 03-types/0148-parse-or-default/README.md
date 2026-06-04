# 0148 — Parse or Default

Parse "42" to 42 and "x" (invalid) to a default 0, printing `42 0`. `Number.parseInt` yields `NaN` on failure, which `Number.isNaN` detects to pick the default.

## Run

    node main.js
