function catalans(count) {
  const out = [];
  let c = 1;
  for (let n = 0; n < count; n++) {
    out.push(c);
    c = (c * 2 * (2 * n + 1)) / (n + 2);
  }
  return out;
}

console.log(catalans(5).join(" "));
