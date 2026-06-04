const N = 3;
const start = [0, 0];
const goal = [2, 2];

const h = (r, c) => Math.abs(r - goal[0]) + Math.abs(c - goal[1]);
const key = (r, c) => r * N + c;

const g = new Map();
g.set(key(...start), 0);
const open = [{ r: start[0], c: start[1], f: h(...start) }];

const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

while (open.length) {
  open.sort((a, b) => a.f - b.f);
  const cur = open.shift();
  if (cur.r === goal[0] && cur.c === goal[1]) {
    console.log(g.get(key(cur.r, cur.c)));
    break;
  }
  const gc = g.get(key(cur.r, cur.c));
  for (const [dr, dc] of dirs) {
    const nr = cur.r + dr, nc = cur.c + dc;
    if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
    const ng = gc + 1;
    const k = key(nr, nc);
    if (!g.has(k) || ng < g.get(k)) {
      g.set(k, ng);
      open.push({ r: nr, c: nc, f: ng + h(nr, nc) });
    }
  }
}
