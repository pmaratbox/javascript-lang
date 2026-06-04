# 0308 — Strongly Connected Components

Count the strongly connected components of 0->1,1->2,2->0,2->3, printing `2`. Kosaraju's two passes — a finish-order DFS then a transpose DFS — fall out naturally with two adjacency lists.

## Run

    node main.js
