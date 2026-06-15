# 0516 — Sort is idempotent

Uses the `fast-check` property-testing library to check a property over generated data. `fc.assert(fc.property(fc.array(fc.integer()), pred), { numRuns: 100 })` generates ~100 random integer lists and verifies that sorting an already-sorted list equals sorting once (`sort(sort(xs)) === sort(xs)`); `fc.assert` throws if any generated case fails, so reaching the `console.log` means the property held for every input. Prints `passed`.

## Run

    node main.js
