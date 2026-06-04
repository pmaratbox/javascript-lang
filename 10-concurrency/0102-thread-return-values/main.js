// Two "threads" (async tasks) compute squares; join and sum their results.
const square = (n) => Promise.resolve(n * n);

async function main() {
  const [a, b] = await Promise.all([square(3), square(4)]);
  console.log(a + b);
}

main();
