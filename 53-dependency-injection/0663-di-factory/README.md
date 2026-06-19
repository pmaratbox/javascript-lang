# 0663 — Factory provider

Uses the [awilix](https://github.com/jeffijoe/awilix) DI container. Instead of autowiring a class, the `service` token is registered with `asFunction(makeService)` — a factory function that constructs and returns the object. Resolving `service` invokes the factory through the container, and the resulting object's `value()` returns `built`.

## Run

    node main.js
