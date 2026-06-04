const { Worker, isMainThread, workerData } = require("worker_threads");

const WORKERS = 4;
const TARGET = 100;
const PER_WORKER = TARGET / WORKERS;

if (isMainThread) {
  // value[0] = shared counter, done[0] = finished worker count
  const sab = new SharedArrayBuffer(8);
  const value = new Int32Array(sab, 0, 1);
  const done = new Int32Array(sab, 4, 1);

  for (let i = 0; i < WORKERS; i++) {
    new Worker(__filename, { workerData: { sab, perWorker: PER_WORKER } });
  }

  // Wait for all workers to finish.
  while (Atomics.load(done, 0) < WORKERS) {
    Atomics.wait(done, 0, Atomics.load(done, 0));
  }

  console.log(Atomics.load(value, 0));
  process.exit(0);
} else {
  const { sab, perWorker } = workerData;
  const value = new Int32Array(sab, 0, 1);
  const done = new Int32Array(sab, 4, 1);

  for (let i = 0; i < perWorker; i++) {
    // CAS retry loop: keep trying until our increment lands.
    let cur = Atomics.load(value, 0);
    while (Atomics.compareExchange(value, 0, cur, cur + 1) !== cur) {
      cur = Atomics.load(value, 0);
    }
  }

  Atomics.add(done, 0, 1);
  Atomics.notify(done, 0);
}
