# 0470 — Boolean flag

The `commander` library defines a boolean flag with `.option('--verbose')`; presence of the flag sets the option to `true`. Here it parses a fixed argv `["--verbose"]` (rather than the real process args) so the program is deterministic, then prints the flag value as lowercase `true`.

## Run

    node main.js
