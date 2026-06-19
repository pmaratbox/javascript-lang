// JavaScript — graphlib (CommonJS). Run: node main.js
const { Graph, alg } = require("graphlib");

const g = new Graph({ directed: false });
[
  ["a", "b", 1],
  ["a", "c", 4],
  ["b", "c", 1],
  ["b", "d", 5],
  ["c", "d", 1],
  ["d", "e", 1],
].forEach(([u, v, w]) => g.setEdge(u, v, w));

// Weighted shortest-path distance a -> e via Dijkstra's algorithm.
const dist = alg.dijkstra(g, "a", (e) => g.edge(e));
console.log(dist["e"].distance);
