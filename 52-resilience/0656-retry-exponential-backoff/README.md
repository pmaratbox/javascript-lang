# 0656 — Exponential backoff

This lesson uses JavaScript's `p-retry` library with an exponential backoff strategy. A shared counter scripts the failure sequence so the operation throws on its first three attempts and succeeds on the fourth. `pRetry(fn, { retries: 4, minTimeout: 0, maxTimeout: 0, factor: 2 })` re-runs the function after each failure, doubling the (zero) base delay each time per the exponential `factor: 2`. The call eventually resolves to `"ok"`, and the counter shows the operation ran four times, so the program prints `4`.

## Run

    node main.js
