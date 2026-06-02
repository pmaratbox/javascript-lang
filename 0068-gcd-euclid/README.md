# 0068 — GCD (Euclid)

Compute the greatest common divisor of `48` and `36` with Euclid's algorithm (repeatedly replace the pair with `(b, a % b)` until the remainder is zero) and print it: `12`. Array destructuring `[a, b] = [b, a % b]` updates both at once each step until the remainder `b` reaches zero.

## Run

    node main.js
