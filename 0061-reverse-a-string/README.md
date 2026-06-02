# 0061 — Reverse a String

Reverse the string `abc` character by character and print the result: `cba`. Spreading the string (`[...text]`) iterates by code point — safer than `split("")`, which splits UTF-16 units — then `reverse()` and `join("")` rebuild it.

## Run

    node main.js
