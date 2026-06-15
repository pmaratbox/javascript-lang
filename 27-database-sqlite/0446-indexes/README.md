# 0446 — Indexes

Creates a `products` table in an in-memory SQLite database, inserts three rows, then executes `CREATE INDEX idx_sku ON products(sku)` to build an index on the `sku` column. It then runs a parameterized lookup `select price from products where sku = ?` bound to `'B'` and prints the resulting price. Uses Node's built-in `node:sqlite` `DatabaseSync` driver with prepared statements.

## Run

    node main.js
