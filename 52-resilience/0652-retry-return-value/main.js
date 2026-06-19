import pRetry from 'p-retry';

let attempt = 0;

const result = await pRetry(
  async () => {
    attempt++;
    if (attempt < 2) throw new Error('transient failure');
    return 'ok';
  },
  { retries: 4, minTimeout: 0, maxTimeout: 0, factor: 1 }
);

console.log(result);
