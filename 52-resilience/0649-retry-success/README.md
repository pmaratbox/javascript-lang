# 0649 — Succeeds first try

This lesson uses JavaScript's `p-retry` library to wrap an operation that succeeds on its first call. A shared counter increments on every invocation, and because the function returns successfully right away, `p-retry` never schedules a retry. The program prints the attempt count, `1`.

## Run

    node main.js
