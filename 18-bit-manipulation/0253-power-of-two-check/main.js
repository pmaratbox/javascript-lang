const isPowerOfTwo = (n) => n > 0 && (n & (n - 1)) === 0;

console.log(`${isPowerOfTwo(16) ? "yes" : "no"} ${isPowerOfTwo(18) ? "yes" : "no"}`);
