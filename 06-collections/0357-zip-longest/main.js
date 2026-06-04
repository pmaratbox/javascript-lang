const a = [1, 2, 3];
const b = ["a", "b"];
const n = Math.max(a.length, b.length);
const out = [];
for (let i = 0; i < n; i++) {
  const x = i < a.length ? a[i] : "-";
  const y = i < b.length ? b[i] : "-";
  out.push(`${x}${y}`);
}
console.log(out.join(" "));
