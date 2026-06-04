const a = [2, 2, 1, 2, 3, 2];
let candidate = a[0];
let count = 0;
for (const x of a) {
  if (count === 0) candidate = x;
  count += x === candidate ? 1 : -1;
}
console.log(candidate);
