# 0476 — Choice option

The `commander` library restricts an option to a fixed set of values via `new Option('--color <color>').choices(['red', 'green', 'blue'])`. Calling `program.parse` on a hardcoded argv array (`["node", "x", "--color", "green"]` instead of the real process args) keeps the output deterministic, and `program.opts().color` reads the validated choice.

## Run

    node main.js
