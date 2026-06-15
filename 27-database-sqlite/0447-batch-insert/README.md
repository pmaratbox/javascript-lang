# 0447 — Batch insert

Insert 1000 rows (values 1..1000) into an in-memory SQLite table efficiently by reusing a single prepared `insert` statement inside one explicit transaction (`begin`/`commit`), then `select count(*)` and print the result. Uses Node's built-in `node:sqlite` `DatabaseSync` driver.

## Run

    node main.js
