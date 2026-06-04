const a = [1, 3, 5];
const b = [2, 4, 6];
const out = [];
for (let i = 0; i < a.length; i++) {
  out.push(a[i], b[i]);
}
console.log(out.join(" "));
