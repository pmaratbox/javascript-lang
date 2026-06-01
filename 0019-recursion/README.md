# 0019 — Recursion

Define a recursive `factorial(n)` that multiplies `n` by `factorial(n - 1)` until it bottoms out at `1`, then print `factorial(5) = 120`. Each call adds a frame to the call stack, and despite the ES2015 spec engines do not eliminate tail calls, so deep recursion throws `RangeError: Maximum call stack size exceeded`. Numbers are IEEE-754 doubles, exact only up to `2**53`.

## Run

    node main.js
