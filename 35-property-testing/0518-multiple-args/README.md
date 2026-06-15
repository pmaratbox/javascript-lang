# 0518 — Multiple arguments

Uses the `fast-check` property-testing library with a multi-argument property. `fc.property(fc.integer(), fc.integer(), (a, b) => ...)` takes two `fc.integer()` arbitraries and passes a fresh pair of generated integers into the predicate on each of the ~100 runs; here it checks that `Math.max(a, b)` is `>= a` and `>= b`. `fc.assert` throws if any generated pair fails, so reaching the `console.log` means the property held for every case. Prints `passed`.

## Run

    node main.js
