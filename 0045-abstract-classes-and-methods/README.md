# 0045 — Abstract Classes & Methods

Define an abstract `Shape` with an abstract `area` and a concrete `describe` that uses it, then implement a `Square` of side 3 and print `area: 9`. JavaScript has no abstract classes, so the base `area` throws to force subclasses to override it; `describe` is a normal inherited method. The "abstractness" is a runtime convention, not a language feature.

## Run

    node main.js
