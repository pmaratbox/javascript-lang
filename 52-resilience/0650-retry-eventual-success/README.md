# 0650 — Eventual success

This lesson uses JavaScript's `p-retry` library to wrap an async operation that follows a scripted failure sequence: a shared counter makes the first attempt throw and the second attempt succeed. `pRetry(fn, { retries: 4, minTimeout: 0, maxTimeout: 0, factor: 1 })` re-runs the function after the failure, the call resolves to `"ok"`, and the counter shows the operation ran twice, so the program prints `2`.

## Run

    node main.js
