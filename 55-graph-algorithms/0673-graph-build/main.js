// JavaScript — graphlib (CommonJS). Build the fixed weighted undirected graph G
// and report its node and edge counts using the library's own accessors.
const { Graph } = require('graphlib');

const g = new Graph({ directed: false });
[["a","b",1],["a","c",4],["b","c",1],["b","d",5],["c","d",1],["d","e",1]]
  .forEach(([u, v, w]) => g.setEdge(u, v, w));

console.log(g.nodeCount(), g.edgeCount());
