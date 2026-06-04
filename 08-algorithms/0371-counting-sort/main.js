function countingSort(a) {
  const max = Math.max(...a);
  const counts = new Array(max + 1).fill(0);
  for (const x of a) counts[x]++;
  const out = [];
  for (let v = 0; v <= max; v++) {
    for (let c = 0; c < counts[v]; c++) out.push(v);
  }
  return out;
}

console.log(countingSort([3, 1, 2, 3, 1]).join(" "));
