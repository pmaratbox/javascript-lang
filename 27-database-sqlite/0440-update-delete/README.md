# 0440 — Update & delete

This lesson creates an in-memory SQLite table of users, then mutates it: an `UPDATE` renames the row with `id=2` to `robert` and a `DELETE` removes the row with `id=1`. It then runs `select id, name from users order by id` and prints each surviving row as `id name`. Uses the built-in `node:sqlite` `DatabaseSync` driver with prepared statements and parameter binding.

## Run

    node main.js
