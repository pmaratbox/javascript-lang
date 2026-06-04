function* iterate(f, x) {
  while (true) {
    yield x;
    x = f(x);
  }
}

function take(gen, n) {
  const out = [];
  for (const v of gen) {
    if (out.length === n) break;
    out.push(v);
  }
  return out;
}

console.log(take(iterate((x) => x * 3, 1), 4).join(" "));
