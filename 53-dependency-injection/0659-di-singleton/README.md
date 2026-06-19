# 0659 — Singleton lifetime

Register `Repo` with awilix as a `Lifetime.SINGLETON` service, then resolve it twice from the container. Because the singleton lifetime caches one instance, the two resolutions are the same object, so identity (`===`) prints `true`.

## Run

    node main.js
