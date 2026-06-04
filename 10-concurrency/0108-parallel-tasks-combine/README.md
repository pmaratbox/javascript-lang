# 0108 — Parallel Tasks Combined

Run two independent tasks that produce 10 and 20 concurrently, then combine (sum) their results into `30`. `async`/`await` with `Promise.all` runs both tasks concurrently and joins their results to combine.

## Run

    node main.js
