function rabinKarp(text, pattern) {
  const base = 256, mod = 1_000_000_007n;
  const m = pattern.length;
  if (m === 0 || m > text.length) return [];
  let patHash = 0n, winHash = 0n, high = 1n;
  for (let i = 0; i < m - 1; i++) high = (high * BigInt(base)) % mod;
  for (let i = 0; i < m; i++) {
    patHash = (patHash * BigInt(base) + BigInt(pattern.charCodeAt(i))) % mod;
    winHash = (winHash * BigInt(base) + BigInt(text.charCodeAt(i))) % mod;
  }
  const res = [];
  for (let i = 0; i + m <= text.length; i++) {
    if (winHash === patHash && text.slice(i, i + m) === pattern) res.push(i);
    if (i + m < text.length) {
      winHash = (winHash - BigInt(text.charCodeAt(i)) * high % mod + mod) % mod;
      winHash = (winHash * BigInt(base) + BigInt(text.charCodeAt(i + m))) % mod;
    }
  }
  return res;
}

console.log(rabinKarp("xabxab", "ab").join(" "));
