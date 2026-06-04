function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(`${isPrime(7) ? "yes" : "no"} ${isPrime(9) ? "yes" : "no"}`);
