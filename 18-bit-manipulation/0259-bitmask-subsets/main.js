const mask = 5;
const out = [];
let sub = mask;
while (true) {
  out.push(sub);
  if (sub === 0) break;
  sub = (sub - 1) & mask;
}
console.log(out.join(" "));
