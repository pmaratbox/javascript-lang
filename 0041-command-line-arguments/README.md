# 0041 — Command-line Arguments

Read the first command-line argument and greet it, so running with `Ada` prints `hello, Ada`. Node puts the arguments in `process.argv`; indices 0 and 1 are the `node` binary and the script, so the first user argument is `process.argv[2]`.

## Run

    node main.js Ada
