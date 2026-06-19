# 0661 — Multiple dependencies

This lesson uses JavaScript's `awilix` DI container with `InjectionMode.PROXY`. Two services `A` (whose `x()` returns `a`) and `B` (whose `y()` returns `b`) are registered alongside a `Service` class that destructures both `{ a, b }` from its constructor. Resolving `service` makes awilix build the whole graph, and `run()` returns `x() + y()`, printing `ab`.

## Run

    node main.js
