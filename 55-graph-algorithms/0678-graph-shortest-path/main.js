// graphlib (CommonJS) — weighted shortest path via Dijkstra on a fixed undirected graph.
const { Graph, alg } = require('graphlib');

const g = new Graph({ directed: false });
[["a","b",1],["a","c",4],["b","c",1],["b","d",5],["c","d",1],["d","e",1]]
  .forEach(([u, v, w]) => g.setEdge(u, v, w));

const d = alg.dijkstra(g, "a", e => g.edge(e));

let path = [], cur = "e";
while (cur) { path.unshift(cur); cur = d[cur].predecessor; }

console.log(path.join("-"));
