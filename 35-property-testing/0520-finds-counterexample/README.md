# 0520 — Finds a counterexample

Uses the `fast-check` property-testing library to detect a falsifying input for a deliberately FALSE property — "every non-negative integer is < 100". Instead of `fc.assert` (which throws and prints a shrink report), this lesson calls `fc.check(fc.property(fc.integer({ min: 0, max: 1000000 }), n => n < 100), { numRuns: 1000 })`, which runs the same generation and shrinking but quietly returns a result object. The library generates inputs, finds and shrinks a counterexample, and sets `result.failed`, so no falsifying-example or shrink report leaks to stdout. Prints `found`.

## Run

    node main.js
