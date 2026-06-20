# 0696 — Cyan text

Uses the `chalk` ANSI-color library to color the word `cyan` with the foreground CYAN color (ANSI 36). A `new Chalk({ level: 1 })` instance forces basic 16-color output even without a TTY, so `c.cyan("cyan")` emits the raw sequence `ESC[36mcyanESC[39m` (chalk resets the foreground with `\x1b[39m`).

## Run

    node main.js
