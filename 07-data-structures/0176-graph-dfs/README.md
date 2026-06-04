# 0176 — Graph DFS

Depth-first traverse from node 0 of the graph 0:[1,2] 1:[0,3] 2:[0,3] 3:[1,2], printing visit order `0 1 3 2`. A recursive helper closes over a visited `Set`, descending into each neighbor in list order.

## Run

    node main.js
