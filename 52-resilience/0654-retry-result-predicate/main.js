import pRetry from 'p-retry';

// Scripted operation: returns an incrementing counter. We retry ON THE RESULT
// (not on an exception) while the value is < 3, by throwing to trigger a retry.
let attempt = 0;

const result = await pRetry(
  async () => {
    attempt++;
    const value = attempt; // 1, 2, 3, ...
    if (value < 3) {
      // Retry-on-result: reject so p-retry tries again.
      throw new Error(`reject result ${value}`);
    }
    return value; // accepted: 3 on the third attempt
  },
  { retries: 5, minTimeout: 0, maxTimeout: 0, factor: 1 },
);

console.log(result);
