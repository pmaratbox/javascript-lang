const rows = [
  ["a", "1"],
  ["bb", "22"],
];

const width = Math.max(...rows.map((r) => r[0].length));
for (const [c0, c1] of rows) {
  console.log(`${c0.padEnd(width)} | ${c1}`);
}
