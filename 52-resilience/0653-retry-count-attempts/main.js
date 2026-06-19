import pRetry from 'p-retry';

let attempts = 0;

try {
  await pRetry(
    async () => {
      attempts++;
      throw new Error('always fails');
    },
    { retries: 4, minTimeout: 0, maxTimeout: 0, factor: 1 }
  );
} catch {
  console.log(attempts);
}
