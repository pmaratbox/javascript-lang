// Recursively fork the sum of a range into halves and join the partial sums.
async function forkJoinSum(lo, hi) {
  if (lo === hi) return lo;
  const mid = Math.floor((lo + hi) / 2);
  const [left, right] = await Promise.all([
    forkJoinSum(lo, mid),
    forkJoinSum(mid + 1, hi),
  ]);
  return left + right;
}

forkJoinSum(1, 8).then((sum) => console.log(sum));
