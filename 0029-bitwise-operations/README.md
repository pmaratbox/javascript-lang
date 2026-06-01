# 0029 — Bitwise Operations

Compute bitwise AND, OR, and XOR on `6` and `3`, plus a left shift of `6` by one bit, printing `and: 2`, `or: 7`, `xor: 5`, and `shift: 12`. Bitwise operators coerce their operands to 32-bit signed integers before operating, then return a `Number`; `6 << 1` doubles to 12. This truncation makes them unreliable above 2^31 — use `BigInt` operators there.

## Run

    node main.js
