# 0443 — Order by & limit

Creates an in-memory SQLite database, inserts six integer scores, then runs `select value from scores order by value desc limit 3` to sort the values in descending order and keep the top three, printing each on its own line. Uses Node's built-in `node:sqlite` `DatabaseSync` with prepared statements and row iteration.

## Run

    node main.js
