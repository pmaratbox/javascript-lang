# 0030 — Variadic Functions

Define a function that accepts a variable number of integer arguments and returns their total, then call it with `1, 2, 3` to print `sum: 6`. A rest parameter `...nums` gathers the arguments into a real array, here folded with `reduce`. It supersedes the old `arguments` object and can be spread back out with `total(...[1, 2, 3])`.

## Run

    node main.js
