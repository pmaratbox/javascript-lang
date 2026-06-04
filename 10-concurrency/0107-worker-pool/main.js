// A pool of 2 real worker threads squares the tasks 1..4. The main thread
// dispatches a task to each idle worker and collects results (sorted, since
// completion order is not deterministic).
const { Worker } = require("worker_threads");

const workerSrc = `
  const { parentPort } = require("worker_threads");
  parentPort.on("message", (n) => parentPort.postMessage(n * n));
`;

const tasks = [1, 2, 3, 4];
const results = [];
let next = 0;
const pool = [];

function dispatch(w) {
  if (next < tasks.length) w.postMessage(tasks[next++]);
  else w.terminate();
}

for (let i = 0; i < 2; i++) {
  const w = new Worker(workerSrc, { eval: true });
  w.on("message", (sq) => {
    results.push(sq);
    if (results.length === tasks.length) {
      results.sort((a, b) => a - b);
      console.log(results.join(" "));
      pool.forEach((x) => x.terminate());
    } else {
      dispatch(w);
    }
  });
  pool.push(w);
}
pool.forEach(dispatch);
