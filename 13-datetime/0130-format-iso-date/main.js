const y = 2026;
const m = 6;
const d = 4;

const pad = (n) => String(n).padStart(2, "0");
console.log(`${y}-${pad(m)}-${pad(d)}`);
