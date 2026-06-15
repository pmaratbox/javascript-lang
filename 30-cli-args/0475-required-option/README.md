# 0475 — Required option

The `commander` library declares a mandatory flag with `requiredOption`, which makes the parser error out when the option is missing. Here `--id` is required and converted to an integer by a coercion callback. It parses a fixed argv array (`["--id", "42"]`) rather than the real process args, so the program is deterministic and always prints `42`.

## Run

    node main.js
