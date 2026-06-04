const { Worker, isMainThread, workerData } = require("worker_threads");

const PARTIES = 3;

if (isMainThread) {
  // count[0] = arrivals at barrier
  const sab = new SharedArrayBuffer(4);
  const count = new Int32Array(sab);

  for (let i = 0; i < PARTIES; i++) {
    new Worker(__filename, { workerData: { sab, parties: PARTIES } });
  }

  // Wait until all parties have arrived.
  while (Atomics.load(count, 0) < PARTIES) {
    Atomics.wait(count, 0, Atomics.load(count, 0));
  }

  console.log(`all reached: ${PARTIES}`);
  process.exit(0);
} else {
  const { sab, parties } = workerData;
  const count = new Int32Array(sab);

  // Arrive at the barrier.
  const arrived = Atomics.add(count, 0, 1) + 1;
  Atomics.notify(count, 0);

  if (arrived < parties) {
    // Block until everyone has reached the barrier.
    while (Atomics.load(count, 0) < parties) {
      Atomics.wait(count, 0, Atomics.load(count, 0));
    }
  }
}
