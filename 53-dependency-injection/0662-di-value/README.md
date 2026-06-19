# 0662 — Inject a value

Uses the [awilix](https://github.com/jeffijoe/awilix) DI container. A constant value `v1` is registered with `asValue` under the token `config`, and a `Service` class registered with `asClass` receives it via PROXY constructor injection (`constructor({ config })`). Resolving `service` builds the graph, injects the value, and `value()` returns the resolved constant.

## Run

    node main.js
