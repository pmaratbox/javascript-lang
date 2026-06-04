let x = 1;
const out = [];
for (let i = 0; i < 3; i++) {
  x = (5 * x + 3) % 16;
  out.push(x);
}
console.log(out.join(" "));
