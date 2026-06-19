# 0667 — Big integer power

This lesson uses JavaScript's native `BigInt` type and the exponentiation operator (`**`) to compute 2 raised to the 100th power exactly. The result has 31 digits, far beyond what a 64-bit float or `Number` can represent without rounding, so `BigInt` keeps every digit precise.

## Run

    node main.js
