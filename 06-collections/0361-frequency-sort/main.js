const xs = [1, 1, 2, 3, 3, 3];

const counts = new Map();
for (const x of xs) {
  counts.set(x, (counts.get(x) ?? 0) + 1);
}

const order = [...counts.keys()].sort((p, q) => counts.get(q) - counts.get(p));

const out = [];
for (const k of order) {
  for (let i = 0; i < counts.get(k); i++) out.push(k);
}
console.log(out.join(" "));
