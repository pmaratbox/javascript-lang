const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

const rows = grid.length;
const cols = grid[0].length;
const dp = grid.map((row) => row.slice());
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    if (r === 0 && c === 0) continue;
    const top = r > 0 ? dp[r - 1][c] : Infinity;
    const left = c > 0 ? dp[r][c - 1] : Infinity;
    dp[r][c] += Math.min(top, left);
  }
}

console.log(dp[rows - 1][cols - 1]);
