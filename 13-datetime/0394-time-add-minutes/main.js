let total = 10 * 60 + 45;
total += 90;
const h = Math.floor(total / 60) % 24;
const m = total % 60;
const pad = (n) => String(n).padStart(2, "0");
console.log(`${pad(h)}:${pad(m)}`);
