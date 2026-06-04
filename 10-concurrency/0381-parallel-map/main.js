// Square 1,2,3,4 in parallel, then reassemble in input order.
const inputs = [1, 2, 3, 4];

Promise.all(inputs.map((x) => Promise.resolve(x * x))).then((results) => {
  console.log(results.join(" "));
});
