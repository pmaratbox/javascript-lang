# 0652 — Return a value

This lesson uses JavaScript's `p-retry` library to wrap an async operation that fails once (via a shared `attempt` counter) and then returns the string `ok`. `pRetry` retries the operation until it succeeds and hands back the resolved value, so the program prints the returned result rather than the attempt count: `ok`.

## Run

    node main.js
