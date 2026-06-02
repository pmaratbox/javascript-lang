# 0057 — Sieve of Eratosthenes

Use the Sieve of Eratosthenes to find every prime number up to `10` and print them: `2 3 5 7`. `new Array(n + 1).fill(true)` makes the flag array; the inner loop strikes multiples from `i*i`, bounded by the outer guard `i*i <= n`.

## Run

    node main.js
