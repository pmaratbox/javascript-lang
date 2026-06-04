const n = 4;
const adj = [[1, 2], [3], [3], []];
const indeg = Array(n).fill(0);
for (const list of adj) for (const v of list) indeg[v]++;

const order = [];
const ready = [];
for (let v = 0; v < n; v++) if (indeg[v] === 0) ready.push(v);

while (ready.length) {
  ready.sort((a, b) => a - b);
  const u = ready.shift();
  order.push(u);
  for (const v of adj[u]) {
    if (--indeg[v] === 0) ready.push(v);
  }
}

console.log(order.join(" "));
