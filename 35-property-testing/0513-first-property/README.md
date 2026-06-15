# 0513 — First property

Uses the `fast-check` property-testing library to check a property over generated data. `fc.assert(fc.property(fc.array(fc.integer()), pred), { numRuns: 100 })` generates ~100 random integer lists and verifies that reversing a list twice yields the original; `fc.assert` throws if any case fails, so reaching the `console.log` means the property held for every generated input. Prints `passed`.

## Run

    node main.js
