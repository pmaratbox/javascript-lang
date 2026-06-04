const n = 5;
const edges = [
  [0, 1],
  [1, 2],
  [3, 4],
];

const adj = Array.from({ length: n }, () => []);
for (const [u, v] of edges) {
  adj[u].push(v);
  adj[v].push(u);
}

const seen = Array(n).fill(false);
function dfs(u) {
  seen[u] = true;
  for (const v of adj[u]) if (!seen[v]) dfs(v);
}

let count = 0;
for (let v = 0; v < n; v++) {
  if (!seen[v]) {
    count++;
    dfs(v);
  }
}

console.log(count);
