const n = 4;
const adj = [[1], [2], [0, 3], []];
const radj = Array.from({ length: n }, () => []);
for (let u = 0; u < n; u++) for (const v of adj[u]) radj[v].push(u);

const order = [];
const seen = Array(n).fill(false);
function dfs1(u) {
  seen[u] = true;
  for (const v of adj[u]) if (!seen[v]) dfs1(v);
  order.push(u);
}
for (let v = 0; v < n; v++) if (!seen[v]) dfs1(v);

const comp = Array(n).fill(-1);
function dfs2(u, c) {
  comp[u] = c;
  for (const v of radj[u]) if (comp[v] === -1) dfs2(v, c);
}

let count = 0;
for (let i = order.length - 1; i >= 0; i--) {
  const u = order[i];
  if (comp[u] === -1) dfs2(u, count++);
}

console.log(count);
