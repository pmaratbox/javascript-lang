# 0445 — Transactions

Create a `t(n integer)` table in an in-memory SQLite database, then run two transactions: the first inserts 1 and 2 and `COMMIT`s, the second inserts 3 and `ROLLBACK`s. A final `select n from t order by n` prints only 1 and 2 because the rolled-back insert is discarded. Uses Node's built-in `node:sqlite` module (`DatabaseSync`) with real `begin`/`commit`/`rollback` transaction control.

## Run

    node main.js
