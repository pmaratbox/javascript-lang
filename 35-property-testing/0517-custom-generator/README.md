# 0517 — Custom generator

Uses the `fast-check` property-testing library and its `.map` generator combinator to build a custom generator. `fc.integer().map(n => n * 2)` transforms each generated integer into an even number, producing a derived generator of even integers. `fc.assert(fc.property(evenInteger, n => n % 2 === 0), { numRuns: 100 })` then checks that every one of ~100 generated values is even; `fc.assert` throws if any case fails, so reaching the `console.log` means the property held for every generated input. Prints `passed`.

## Run

    node main.js
