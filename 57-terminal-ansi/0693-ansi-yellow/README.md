# 0693 — Yellow text

Uses the [chalk](https://github.com/chalk/chalk) ANSI-color library to color the word `yellow` with the foreground YELLOW color (ANSI 33). A `new Chalk({ level: 1 })` instance forces basic 16-color output so the escape codes are emitted even when stdout is not a TTY. chalk's `yellow` method wraps the text and resets the foreground with `\x1b[39m`, yielding the raw sequence `ESC[33myellowESC[39m`.

## Run

    node main.js
