# 0653 — Count attempts

This lesson uses JavaScript's `p-retry` library to retry an operation that always fails. With `{ retries: 4 }` the library makes `R + 1` total attempts (one initial call plus 4 retries), so a shared counter incremented on every call reaches 5 before `pRetry` finally rejects. Timeouts are set to 0 (`minTimeout: 0`, `maxTimeout: 0`, `factor: 1`) so retries happen instantly and the attempt count is delay-independent. The program catches the final rejection and prints the total number of attempts, `5`.

## Run

    node main.js
