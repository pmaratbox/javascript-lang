# 0070 — Digit Sum

Sum the decimal digits of `1234` (repeatedly take the last digit with `% 10` and drop it with `/ 10`) and print the total: `10`. `n % 10` takes the last digit; `Math.floor(n / 10)` drops it (JavaScript `/` is floating-point, so the floor is explicit).

## Run

    node main.js
