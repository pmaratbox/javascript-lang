// Producer sends 1..5 through an async channel; consumer sums them.
async function* producer() {
  for (let i = 1; i <= 5; i++) {
    yield i;
  }
}

async function consumer(chan) {
  let sum = 0;
  for await (const v of chan) {
    sum += v;
  }
  return sum;
}

async function main() {
  const total = await consumer(producer());
  console.log(total);
}

main();
