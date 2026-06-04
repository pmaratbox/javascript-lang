const expr = "3 + 4 * 2";
const prec = { "+": 1, "-": 1, "*": 2, "/": 2 };
const out = [];
const ops = [];
for (const tok of expr.split(" ")) {
  if (tok in prec) {
    while (ops.length && prec[ops[ops.length - 1]] >= prec[tok]) out.push(ops.pop());
    ops.push(tok);
  } else {
    out.push(tok);
  }
}
while (ops.length) out.push(ops.pop());
console.log(out.join(" "));
