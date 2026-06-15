# 0469 — Positional argument

Defines a CLI with one positional argument `name` using the `commander` library (`.argument('<name>')`). It parses a hardcoded argv array (`['node', 'x', 'alice']`) instead of the real process args, so running with no arguments always produces deterministic output. The parsed positional value is read from `program.processedArgs` and printed.

## Run

    node main.js
