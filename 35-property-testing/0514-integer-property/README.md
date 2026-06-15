# 0514 — Integer property

Uses the `fast-check` property-testing library run programmatically (not via a test runner). `fc.assert` drives `fc.property` over two `fc.integer()` generators, checking that addition is commutative (`a + b === b + a`) across 100 generated input pairs. Because the property is universally true, `fc.assert` never throws, so the program prints `passed`.

## Run

    node main.js
