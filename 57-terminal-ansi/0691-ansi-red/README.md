# 0691 — Red text

Uses the `chalk` ANSI-color library to color the word `red` with the foreground RED color (ANSI 31). A `new Chalk({ level: 1 })` instance forces basic 16-color output even without a TTY, so `c.red("red")` emits the raw sequence `ESC[31mredESC[39m` (chalk resets the foreground with `\x1b[39m`).

## Run

    node main.js
