# 0028 — String Formatting

Format the float `3.14159` to two decimals and zero-pad the integer `42` to width five, printing `pi: 3.14` and `id: 00042`. Number formatting is method-based: `toFixed(2)` rounds to two decimals (returning a string), and `String(42).padStart(5, "0")` left-pads to width 5. There is no `printf`; `Intl.NumberFormat` handles locale-aware formatting.

## Run

    node main.js
