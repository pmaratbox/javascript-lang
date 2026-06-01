# 0022 — Concurrency

Start two tasks that produce `1` and `2`, let them run concurrently, then join their results and print `sum: 3`. JavaScript is single-threaded; concurrency comes from the event loop, not parallel threads. `async` functions return promises and `Promise.all` awaits both together; the `(async () => { ... })()` wrapper supplies an `async` context. True parallelism needs Worker threads.

## Run

    node main.js
