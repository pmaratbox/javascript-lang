let row = [1];
for (let r = 0; r < 4; r++) {
  console.log(row.join(" "));
  const next = [1];
  for (let i = 0; i < row.length - 1; i++) {
    next.push(row[i] + row[i + 1]);
  }
  next.push(1);
  row = next;
}
