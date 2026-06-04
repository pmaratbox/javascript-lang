const graph = {
  0: [1, 2],
  1: [0, 3],
  2: [0, 3],
  3: [1, 2],
};

function dfs(start) {
  const visited = new Set();
  const order = [];
  function visit(node) {
    if (visited.has(node)) return;
    visited.add(node);
    order.push(node);
    for (const next of graph[node]) visit(next);
  }
  visit(start);
  return order;
}

console.log(dfs(0).join(" "));
