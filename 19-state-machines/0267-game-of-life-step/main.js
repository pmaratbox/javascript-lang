const grid = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];

const rows = grid.length;
const cols = grid[0].length;

function liveNeighbors(g, r, c) {
  let count = 0;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
        count += g[nr][nc];
      }
    }
  }
  return count;
}

const next = grid.map((row, r) =>
  row.map((cell, c) => {
    const n = liveNeighbors(grid, r, c);
    return cell ? (n === 2 || n === 3 ? 1 : 0) : n === 3 ? 1 : 0;
  })
);

for (const row of next) {
  console.log(row.map((c) => (c ? "#" : ".")).join(""));
}
