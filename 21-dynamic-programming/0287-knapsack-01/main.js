const items = [
  [2, 3],
  [3, 4],
  [4, 5],
];
const capacity = 5;

const dp = Array(capacity + 1).fill(0);
for (const [w, v] of items) {
  for (let c = capacity; c >= w; c--) {
    dp[c] = Math.max(dp[c], dp[c - w] + v);
  }
}

console.log(dp[capacity]);
