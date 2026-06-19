# 0677 — Shortest distance

The `graphlib` library builds an undirected weighted graph G and runs `alg.dijkstra`, Dijkstra's single-source shortest-path algorithm, from node `a` using each edge's stored weight (`g.edge(e)`). The result map gives the minimum total weight to every node; printing `dist["e"].distance` yields the weighted shortest-path distance from `a` to `e`, which is `4` (along the unique path a-b-c-d-e).

## Run

    node main.js
