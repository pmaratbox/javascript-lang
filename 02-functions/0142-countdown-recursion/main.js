function countdown(n, acc) {
  if (n === 0) return acc;
  acc.push(n);
  return countdown(n - 1, acc);
}

console.log(countdown(5, []).join(" "));
