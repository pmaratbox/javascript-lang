function moves(n) {
  if (n === 0) return 0;
  return 2 * moves(n - 1) + 1;
}

console.log(moves(3));
