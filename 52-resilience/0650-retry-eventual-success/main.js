import pRetry from 'p-retry';

// Scripted failure sequence: a shared counter that fails the first
// attempt, then succeeds on the second.
let attempts = 0;

const result = await pRetry(
  async () => {
    attempts++;
    if (attempts < 2) {
      throw new Error('transient failure');
    }
    return 'ok';
  },
  { retries: 4, minTimeout: 0, maxTimeout: 0, factor: 1 },
);

// p-retry actually drove the retry; `result` is "ok" and `attempts`
// is the number of times the operation ran before succeeding.
console.log(attempts);
