const a = [1, 2, 3];
for (let mask = 0; mask < 1 << a.length; mask++) {
  const subset = [];
  for (let i = 0; i < a.length; i++) {
    if (mask & (1 << i)) subset.push(a[i]);
  }
  console.log(subset.length === 0 ? "{}" : subset.join(" "));
}
