function isBipartite(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  const color = Array(n).fill(-1);
  for (let s = 0; s < n; s++) {
    if (color[s] !== -1) continue;
    color[s] = 0;
    const queue = [s];
    while (queue.length) {
      const u = queue.shift();
      for (const v of adj[u]) {
        if (color[v] === -1) {
          color[v] = color[u] ^ 1;
          queue.push(v);
        } else if (color[v] === color[u]) {
          return false;
        }
      }
    }
  }
  return true;
}

const cycle4 = [[0, 1], [1, 2], [2, 3], [3, 0]];
const triangle = [[0, 1], [1, 2], [2, 0]];

console.log(
  (isBipartite(4, cycle4) ? "yes" : "no") +
    " " +
    (isBipartite(3, triangle) ? "yes" : "no")
);
