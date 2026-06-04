const n = 3;
const adj = [[1], [2], [0]];
const WHITE = 0, GRAY = 1, BLACK = 2;
const color = Array(n).fill(WHITE);

function dfs(u) {
  color[u] = GRAY;
  for (const v of adj[u]) {
    if (color[v] === GRAY) return true;
    if (color[v] === WHITE && dfs(v)) return true;
  }
  color[u] = BLACK;
  return false;
}

let hasCycle = false;
for (let v = 0; v < n; v++) {
  if (color[v] === WHITE && dfs(v)) {
    hasCycle = true;
    break;
  }
}

console.log(hasCycle ? "cycle" : "acyclic");
