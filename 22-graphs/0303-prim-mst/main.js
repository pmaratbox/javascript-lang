const n = 4;
const adj = [
  [[1, 1]],
  [[0, 1], [2, 2]],
  [[1, 2], [3, 3]],
  [[2, 3]],
];

const inTree = Array(n).fill(false);
const key = Array(n).fill(Infinity);
key[0] = 0;
let total = 0;

for (let i = 0; i < n; i++) {
  let u = -1;
  for (let v = 0; v < n; v++) {
    if (!inTree[v] && (u === -1 || key[v] < key[u])) u = v;
  }
  inTree[u] = true;
  total += key[u];
  for (const [w, weight] of adj[u]) {
    if (!inTree[w] && weight < key[w]) key[w] = weight;
  }
}

console.log(total);
