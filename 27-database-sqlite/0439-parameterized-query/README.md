# 0439 — Parameterized query

Creates an in-memory SQLite database, inserts three users, then runs `select name from users where id = ?` with the value 2 supplied as a bound parameter (never string interpolation), and prints the resulting name. Uses Node's built-in `node:sqlite` `DatabaseSync` with prepared statements and positional parameter binding.

## Run

    node main.js
