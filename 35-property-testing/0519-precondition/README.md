# 0519 — Precondition / filter

Uses the `fast-check` property-testing library with a generator precondition. `fc.integer().filter(n => n > 0)` derives a new arbitrary that only yields positive integers, so the discarded values never reach the predicate. `fc.assert(fc.property(positiveInt, n => n + 1 > n), { numRuns: 100 })` then checks `n + 1 > n` over ~100 generated positive integers; `fc.assert` throws if any case fails, so reaching the `console.log` means the property held. Prints `passed`.

## Run

    node main.js
