# 0442 — Group by

Create a `sales(category text, amount integer)` table in an in-memory SQLite database, insert five rows, then run `select category, sum(amount) from sales group by category order by category` to aggregate amounts per group and print each as `category sum` (space-separated). Uses Node's built-in `node:sqlite` module (`DatabaseSync`).

## Run

    node main.js
