const a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let cur = a[0];
let best = a[0];
for (let i = 1; i < a.length; i++) {
  cur = Math.max(a[i], cur + a[i]);
  best = Math.max(best, cur);
}
console.log(best);
