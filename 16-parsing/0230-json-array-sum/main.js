const text = "[1,2,3]";
const inner = text.slice(1, -1);
const sum = inner.split(",").reduce((acc, t) => acc + parseInt(t, 10), 0);
console.log(sum);
