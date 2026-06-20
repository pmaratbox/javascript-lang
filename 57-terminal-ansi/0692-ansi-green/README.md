# 0692 — Green text

Color the word `green` with the foreground GREEN color (ANSI 32) and print the raw sequence. This uses the **chalk** ANSI library: a `Chalk` instance created with `{ level: 1 }` forces basic 16-color output even when stdout is not a TTY, and `c.green(...)` wraps the word in `\x1b[32m` … `\x1b[39m` (the foreground reset).

## Run

    node main.js
