# 0658 — Inject a dependency

This lesson uses JavaScript's `awilix` DI container to wire one service onto another. `Repo` exposes `data()` returning `data`, and `Service` declares a constructor dependency `{ repo }` resolved through PROXY injection mode. Both classes are registered on the container (`repo` as a singleton), then `service` is resolved — awilix injects the `Repo` instance — and `service.run()` calls `repo.data()`, printing `data`.

## Run

    node main.js
