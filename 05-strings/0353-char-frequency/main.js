const counts = new Map();
for (const ch of "aab") {
  counts.set(ch, (counts.get(ch) ?? 0) + 1);
}

const out = [...counts].map(([k, v]) => `${k}:${v}`).join(" ");
console.log(out);
