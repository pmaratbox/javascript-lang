# 0096 — Mutual Recursion

Using two mutually recursive functions `isEven` and `isOdd` (each calling the other), report whether `4` and `3` are even, printing `even` and `odd`. Function declarations are hoisted, so `isEven` can call `isOdd` even though it is defined later; each call reduces `n` by one.

## Run

    node main.js
