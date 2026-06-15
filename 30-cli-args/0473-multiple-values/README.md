# 0473 — Multiple values

The `commander` library supports repeatable options: passing a custom collector function (plus an initial `[]`) to `.option('--num <n>', ...)` makes each occurrence of `--num` accumulate into a list instead of overwriting. This lesson parses a fixed hardcoded argv (`--num 1 --num 2 --num 3`) for deterministic output, then sums the collected integers.

## Run

    node main.js
