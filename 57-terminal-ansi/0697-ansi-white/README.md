# 0697 — White text

Uses the `chalk` ANSI-color library to color the word `white` with the foreground WHITE color (ANSI 37). A `new Chalk({ level: 1 })` instance forces basic 16-color output even without a TTY, so `c.white("white")` emits the raw sequence `ESC[37mwhiteESC[39m` (chalk resets the foreground with `\x1b[39m`).

## Run

    node main.js
