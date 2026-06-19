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

// Connectivity: a and e are connected iff they land in the same
// connected component (graphlib's alg.components).
const comps = alg.components(g);
const connected = comps.some((c) => c.includes("a") && c.includes("e"));
console.log(String(connected));
