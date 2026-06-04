const num = (v) => ({ type: "num", v });
const add = (l, r) => ({ type: "add", l, r });
const mul = (l, r) => ({ type: "mul", l, r });

function evalNode(n) {
  switch (n.type) {
    case "num": return n.v;
    case "add": return evalNode(n.l) + evalNode(n.r);
    case "mul": return evalNode(n.l) * evalNode(n.r);
  }
}

const ast = add(num(1), mul(num(2), num(3)));
console.log(evalNode(ast));
