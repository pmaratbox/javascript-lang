# 0472 — Default value

Uses the `commander` library's option default-value feature. We declare `--count` with an integer coercion and a default of `1`, then parse a fixed empty argv (`['node', 'x']`) for determinism. Since `--count` is absent, commander supplies the default, so the program prints `1`.

## Run

    node main.js
