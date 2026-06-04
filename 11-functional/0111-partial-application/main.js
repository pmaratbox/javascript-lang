const add = (a, b) => a + b;

const add10 = add.bind(null, 10);

console.log(add10(3));
