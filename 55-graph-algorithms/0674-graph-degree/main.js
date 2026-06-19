// Node degree with graphlib (CommonJS). Run: node main.js
const { Graph } = require("graphlib");

// FIXED weighted undirected graph G.
const g = new Graph({ directed: false });
[["a", "b", 1], ["a", "c", 4], ["b", "c", 1], ["b", "d", 5], ["c", "d", 1], ["d", "e", 1]]
  .forEach(([u, v, w]) => g.setEdge(u, v, w));

// Degree of b = number of incident neighbors (b connects to a, c, d).
const degree = g.neighbors("b").length;
console.log(degree);
