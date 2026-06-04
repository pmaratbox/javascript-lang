const row = "00100".split("").map(Number);

const next = row.map((_, i) => {
  const left = i > 0 ? row[i - 1] : 0;
  const right = i < row.length - 1 ? row[i + 1] : 0;
  return left ^ right;
});

console.log(next.join(""));
