const m = [
  [1, 2],
  [3, 4],
];
const v = [5, 6];

const result = m.map((row) => row.reduce((acc, x, i) => acc + x * v[i], 0));
console.log(result.join(" "));
