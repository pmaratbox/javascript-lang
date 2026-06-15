# 0474 — Subcommand

The `commander` library defines a subcommand with `.command('add')` plus two integer positionals via `.argument(...)`, and dispatches to its `.action` handler. The program parses a fixed, hardcoded argv (`["node", "x", "add", "2", "3"]`) rather than the real process args, so running with no arguments is deterministic.

## Run

    node main.js
