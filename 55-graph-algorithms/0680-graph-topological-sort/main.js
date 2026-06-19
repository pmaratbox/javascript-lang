// Topological sort with graphlib (CommonJS). Run: node main.js
const { Graph, alg } = require("graphlib");

// FIXED directed acyclic graph (DAG) with a UNIQUE topological order.
const dag = new Graph({ directed: true });
[["a", "b"], ["b", "c"], ["a", "c"], ["c", "d"], ["d", "e"]]
  .forEach(([u, v]) => dag.setEdge(u, v));

// alg.topsort returns nodes in a valid topological order; here it is unique.
console.log(alg.topsort(dag).join(","));
