# 0441 — Aggregate functions

Creates an in-memory table of amounts (10, 20, 30, 40, 50) and runs a single query using SQL aggregate functions `count(*)`, `sum`, `min`, and `max`, then prints the four results each on its own line. Uses Node's built-in `node:sqlite` module (`DatabaseSync`) with prepared statements.

## Run

    node main.js
