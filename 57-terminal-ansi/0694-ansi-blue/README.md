# 0694 — Blue text

Uses the `chalk` ANSI-color library to color the word `blue` with the foreground BLUE color (ANSI 34). A `new Chalk({ level: 1 })` instance forces basic 16-color output even without a TTY, so `c.blue("blue")` emits the raw sequence `ESC[34mblueESC[39m` (chalk resets the foreground with `\x1b[39m`).

## Run

    node main.js
