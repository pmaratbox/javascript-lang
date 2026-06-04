# 0375 — Retry With Attempts

Retry an operation that fails on attempts 1 and 2 and succeeds on attempt 3, printing `ok after 3`. A bounded `for` loop with `try`/`catch` retries until success and reports the attempt count.

## Run

    node main.js
