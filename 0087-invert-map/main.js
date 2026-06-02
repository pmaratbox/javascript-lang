const m = { a: 1, b: 2, c: 3 };
const inverted = {};
for (const [k, v] of Object.entries(m)) {
  inverted[v] = k;
}
const keys = Object.keys(inverted).map(Number).sort((x, y) => x - y);
console.log(keys.map((k) => `${k}:${inverted[k]}`).join(" "));
