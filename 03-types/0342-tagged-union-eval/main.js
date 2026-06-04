const num = (n) => ({ tag: "Num", n });
const add = (l, r) => ({ tag: "Add", l, r });

function evalExpr(e) {
  switch (e.tag) {
    case "Num":
      return e.n;
    case "Add":
      return evalExpr(e.l) + evalExpr(e.r);
  }
}

console.log(evalExpr(add(num(1), num(2))));
