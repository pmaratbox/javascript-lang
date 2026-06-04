const n = 4;
const adj = [
  [[1, 4], [2, 1]],
  [[3, 1]],
  [[1, 2], [3, 5]],
  [],
];

const dist = Array(n).fill(Infinity);
dist[0] = 0;
const visited = Array(n).fill(false);

for (let i = 0; i < n; i++) {
  let u = -1;
  for (let v = 0; v < n; v++) {
    if (!visited[v] && (u === -1 || dist[v] < dist[u])) u = v;
  }
  if (dist[u] === Infinity) break;
  visited[u] = true;
  for (const [w, weight] of adj[u]) {
    if (dist[u] + weight < dist[w]) dist[w] = dist[u] + weight;
  }
}

console.log(dist.join(" "));
