// Chain asynchronous steps: 5 -> (*2) -> (+1) = 11.
Promise.resolve(5)
  .then((x) => x * 2)
  .then((x) => x + 1)
  .then((x) => console.log(x));
