const s = "bbbab";
const n = s.length;

const dp = Array.from({ length: n }, () => Array(n).fill(0));
for (let i = n - 1; i >= 0; i--) {
  dp[i][i] = 1;
  for (let j = i + 1; j < n; j++) {
    dp[i][j] =
      s[i] === s[j] ? dp[i + 1][j - 1] + 2 : Math.max(dp[i + 1][j], dp[i][j - 1]);
  }
}

console.log(dp[0][n - 1]);
