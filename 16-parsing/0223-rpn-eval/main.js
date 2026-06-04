const expr = "3 4 + 5 *";
const stack = [];
for (const tok of expr.split(" ")) {
  if (tok === "+" || tok === "-" || tok === "*" || tok === "/") {
    const b = stack.pop();
    const a = stack.pop();
    stack.push(tok === "+" ? a + b : tok === "-" ? a - b : tok === "*" ? a * b : a / b);
  } else {
    stack.push(Number(tok));
  }
}
console.log(stack[0]);
