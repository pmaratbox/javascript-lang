const left = { a: 1, b: 2 };
const right = { b: 3, c: 4 };
const merged = { ...left, ...right };
const out = Object.keys(merged)
  .sort()
  .map((k) => `${k}:${merged[k]}`)
  .join(" ");
console.log(out);
