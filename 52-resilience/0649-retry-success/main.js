import pRetry from 'p-retry';

let attempts = 0;

await pRetry(
  async () => {
    attempts++;
    // Succeeds on the very first call, so no retry is ever needed.
    return 'ok';
  },
  { retries: 4, minTimeout: 0, maxTimeout: 0, factor: 1 }
);

console.log(attempts);
