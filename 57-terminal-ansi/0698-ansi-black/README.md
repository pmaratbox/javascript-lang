# 0698 — Black text

Uses the `chalk` ANSI-color library to color the word `black` with the foreground BLACK color (ANSI 30). A `new Chalk({ level: 1 })` instance forces basic 16-color output even without a TTY, so `c.black("black")` emits the raw sequence `ESC[30mblackESC[39m` (chalk resets the foreground with `\x1b[39m`).

## Run

    node main.js
