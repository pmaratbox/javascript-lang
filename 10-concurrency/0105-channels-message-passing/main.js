// Model a channel as an async queue: producer pushes 1,2,3 then closes;
// consumer receives them in order and prints space-separated.
async function* channel() {
  for (const v of [1, 2, 3]) {
    yield v; // send
  }
  // closing the generator ends the stream
}

async function main() {
  const received = [];
  for await (const v of channel()) {
    received.push(v); // receive in order
  }
  console.log(received.join(" "));
}

main();
