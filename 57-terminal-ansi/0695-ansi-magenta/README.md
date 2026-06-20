# 0695 — Magenta text

Uses the `chalk` ANSI-color library to color the word `magenta` with the foreground MAGENTA color (ANSI 35). A `new Chalk({ level: 1 })` instance forces basic 16-color output even without a TTY, so `c.magenta("magenta")` emits the raw sequence `ESC[35mmagentaESC[39m` (chalk resets the foreground with `\x1b[39m`).

## Run

    node main.js
