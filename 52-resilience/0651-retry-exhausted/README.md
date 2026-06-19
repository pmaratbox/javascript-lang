# 0651 — Retries exhausted

This lesson uses JavaScript's `p-retry` library to wrap an operation that always fails. With `{ retries: 2 }` the library makes 3 total attempts (the initial call plus 2 retries) using zero-delay timeouts. Once the retries are exhausted, `pRetry` rejects with the last error, which the `try/catch` handles by printing `failed`.

## Run

    node main.js
