const src = "2+3*4";
let pos = 0;

function factor() {
  let n = 0;
  while (pos < src.length && src[pos] >= "0" && src[pos] <= "9") {
    n = n * 10 + Number(src[pos++]);
  }
  return n;
}
function term() {
  let v = factor();
  while (src[pos] === "*") { pos++; v *= factor(); }
  return v;
}
function expr() {
  let v = term();
  while (src[pos] === "+") { pos++; v += term(); }
  return v;
}
console.log(expr());
