function* naturals() {
  let n = 1;
  while (true) yield n++;
}

function* filter(pred, iter) {
  for (const x of iter) if (pred(x)) yield x;
}

function take(n, iter) {
  const out = [];
  for (const x of iter) {
    if (out.length >= n) break;
    out.push(x);
  }
  return out;
}

console.log(take(3, filter((x) => x % 2 === 0, naturals())).join(" "));
