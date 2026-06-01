const stack = [];
for (const n of [1, 2, 3]) {
  stack.push(n);
}

const popped = [];
while (stack.length > 0) {
  popped.push(stack.pop());
}

console.log(popped.join(" "));
