# 0448 — Upsert

Creates an in-memory SQLite database with an `inv(item, qty)` table, inserts `('apple', 5)`, then upserts `apple` and `banana` using `insert ... on conflict(item) do update set qty = qty + excluded.qty` so the existing apple row accumulates to 10 while banana is inserted fresh, finally running `select item, qty from inv order by item` and printing each row as `item qty`. Uses Node's built-in `node:sqlite` module (`DatabaseSync`) with prepared statements.

## Run

    node main.js
