// Two independent tasks produce 10 and 20 concurrently; combine by summing.
const taskA = async () => 10;
const taskB = async () => 20;

async function main() {
  const [a, b] = await Promise.all([taskA(), taskB()]);
  console.log(a + b);
}

main();
