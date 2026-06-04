const n = 4;
const adj = [
  [[1, 4], [2, 1]],
  [[3, 1]],
  [[1, 2], [3, 5]],
  [],
];

const dist = Array(n).fill(Infinity);
const prev = Array(n).fill(-1);
const visited = Array(n).fill(false);
dist[0] = 0;

for (let i = 0; i < n; i++) {
  let u = -1;
  for (let v = 0; v < n; v++) {
    if (!visited[v] && (u === -1 || dist[v] < dist[u])) u = v;
  }
  if (dist[u] === Infinity) break;
  visited[u] = true;
  for (const [w, weight] of adj[u]) {
    if (dist[u] + weight < dist[w]) {
      dist[w] = dist[u] + weight;
      prev[w] = u;
    }
  }
}

const path = [];
for (let at = 3; at !== -1; at = prev[at]) path.push(at);
path.reverse();

console.log(path.join(" "));
