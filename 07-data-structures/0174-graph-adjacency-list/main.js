class AdjacencyList {
  constructor() {
    this.adj = new Map();
  }

  addEdge(a, b) {
    if (!this.adj.has(a)) this.adj.set(a, []);
    if (!this.adj.has(b)) this.adj.set(b, []);
    this.adj.get(a).push(b);
    this.adj.get(b).push(a);
  }

  neighbors(node) {
    return this.adj.get(node) ?? [];
  }
}

const graph = new AdjacencyList();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);

console.log(graph.neighbors(0).join(" "));
