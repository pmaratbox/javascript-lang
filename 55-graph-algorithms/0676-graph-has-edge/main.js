// graphlib (CommonJS) — edge existence on a fixed undirected graph.
const { Graph } = require('graphlib');

const g = new Graph({ directed: false });
[["a","b",1],["a","c",4],["b","c",1],["b","d",5],["c","d",1],["d","e",1]]
  .forEach(([u, v, w]) => g.setEdge(u, v, w));

console.log(String(g.hasEdge("b", "c")), String(g.hasEdge("a", "e")));
