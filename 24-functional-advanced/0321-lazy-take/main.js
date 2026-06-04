function* naturals() {
  let n = 1;
  while (true) yield n++;
}

function take(n, iter) {
  const out = [];
  for (const x of iter) {
    if (out.length >= n) break;
    out.push(x);
  }
  return out;
}

console.log(take(5, naturals()).join(" "));
