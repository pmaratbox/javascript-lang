# 0444 — Inner join

Creates `users` and `orders` tables in an in-memory SQLite database, inserts a few rows, then runs an inner join (`orders o join users u on u.id = o.user_id`) ordered by name and item, printing each result as `name item`. Uses Node's built-in `node:sqlite` `DatabaseSync` driver with prepared statements.

## Run

    node main.js
