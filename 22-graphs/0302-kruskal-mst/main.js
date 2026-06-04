const edges = [
  [0, 1, 1],
  [1, 2, 2],
  [0, 2, 3],
];

const parent = [0, 1, 2];
function find(x) {
  while (parent[x] !== x) x = parent[x] = parent[parent[x]];
  return x;
}
function union(a, b) {
  const ra = find(a), rb = find(b);
  if (ra === rb) return false;
  parent[ra] = rb;
  return true;
}

edges.sort((a, b) => a[2] - b[2]);
let total = 0;
for (const [u, v, w] of edges) {
  if (union(u, v)) total += w;
}

console.log(total);
