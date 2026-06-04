const n = 3;
const edges = [
  [0, 1, 1],
  [1, 2, -2],
  [0, 2, 4],
];

const dist = Array(n).fill(Infinity);
dist[0] = 0;

for (let i = 0; i < n - 1; i++) {
  for (const [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) dist[v] = dist[u] + w;
  }
}

console.log(dist.join(" "));
