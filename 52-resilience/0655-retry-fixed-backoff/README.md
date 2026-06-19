# 0655 — Fixed backoff

This lesson uses JavaScript's `p-retry` library with a *fixed* backoff strategy: `factor: 1` makes every retry wait the same amount, and `minTimeout`/`maxTimeout` of `0` keep the delays instant. A shared counter scripts the failure sequence — the operation throws on its first two attempts and then returns on the third. Because `p-retry` actually re-invokes the function on each failure, the printed counter reaches `3`, showing the total number of attempts the library made.

## Run

    node main.js
