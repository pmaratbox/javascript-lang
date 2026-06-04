const xs = ["a", "b", "a", "c", "b", "a"];
const counts = new Map();
for (const x of xs) {
  counts.set(x, (counts.get(x) ?? 0) + 1);
}
const top = [...counts.entries()]
  .sort((p, q) => q[1] - p[1])
  .slice(0, 2)
  .map(([k]) => k);
console.log(top.join(" "));
