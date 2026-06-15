# 0437 — Connect & query

Open an in-memory SQLite database and run a single query. Uses Node's built-in `node:sqlite` module (`DatabaseSync`) to open a `:memory:` database, prepare `select 42`, fetch the single row with `.get()`, and print the integer result.

## Run

    node main.js
