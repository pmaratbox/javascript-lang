# 0471 — Option with value

The `commander` library parses CLI options. Defining `--name <n>` declares an option that takes a string value; calling `program.parse` on a fixed argv array (`["node", "x", "--name", "alice"]` instead of the real process args) keeps the output deterministic, and `program.opts().name` reads the parsed value.

## Run

    node main.js
