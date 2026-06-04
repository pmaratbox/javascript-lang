const strategies = {
  add: (a, b) => a + b,
  mul: (a, b) => a * b,
};

const apply = (name, a, b) => strategies[name](a, b);

console.log(`${apply("add", 3, 4)} ${apply("mul", 3, 4)}`);
