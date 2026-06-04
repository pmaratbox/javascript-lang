# 0300 — Topological Sort

Topologically sort the DAG 0->1,0->2,1->3,2->3 using the Kahn algorithm (smallest index first), printing `0 1 2 3`. Re-sorting the ready array before each `shift` keeps the smallest-index tie-break tiny and explicit.

## Run

    node main.js
