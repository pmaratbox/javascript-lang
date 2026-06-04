// Real OS threads are unavailable here, so model 3 workers as async tasks
// and join them with Promise.all, then print the count.
const worker = (id) => Promise.resolve(id);

async function main() {
  const joined = await Promise.all([worker(0), worker(1), worker(2)]);
  console.log(`done: ${joined.length}`);
}

main();
