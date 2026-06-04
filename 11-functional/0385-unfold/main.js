function unfold(seed, next, count) {
  const out = [];
  let x = seed;
  for (let i = 0; i < count; i++) {
    out.push(x);
    x = next(x);
  }
  return out;
}

console.log(unfold(1, (x) => x * 2, 5).join(" "));
