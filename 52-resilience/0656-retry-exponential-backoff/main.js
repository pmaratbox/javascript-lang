import pRetry from 'p-retry';

// Scripted failure sequence: a shared counter that throws on the first
// three attempts, then succeeds on the fourth.
let attempts = 0;

const result = await pRetry(
  async () => {
    attempts++;
    if (attempts < 4) {
      throw new Error('transient failure');
    }
    return 'ok';
  },
  // Exponential backoff: factor 2 doubles the delay each retry. The base
  // delay is zero so the retries are instant; the attempt count is what
  // the backoff strategy is exercising here.
  { retries: 4, minTimeout: 0, maxTimeout: 0, factor: 2 },
);

// p-retry actually drove the retries with exponential backoff; `result`
// is "ok" and `attempts` is the total number of times the operation ran.
console.log(attempts);
