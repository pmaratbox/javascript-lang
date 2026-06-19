import pRetry from 'p-retry';

// Scripted failure sequence: fail twice, then succeed on the third attempt.
let attempts = 0;

await pRetry(
  async () => {
    attempts++;
    if (attempts < 3) {
      throw new Error('transient failure');
    }
    return 'done';
  },
  // Fixed backoff: factor 1 keeps every delay equal; zero timeouts keep it instant.
  // retries: 4 allows up to 5 total attempts (the initial call plus 4 retries).
  { retries: 4, minTimeout: 0, maxTimeout: 0, factor: 1 },
);

console.log(attempts);
