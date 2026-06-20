# 0700 — Count removed lines

Uses the [jsdiff](https://github.com/kpdecker/jsdiff) (`diff`) library's `diffLines`
to diff line-list A (`apple, banana, cherry`) against B (`apple, blueberry, cherry, date`).
Each returned part carries an `added`/`removed` flag; we collect the lines of the
removed parts and print how many lines were removed (`banana` → `1`).

## Run

    node main.js
