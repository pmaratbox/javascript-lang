const width = 10;
const pct = 0.4;
const filled = Math.round(width * pct);
console.log(`[${"#".repeat(filled)}${"-".repeat(width - filled)}]`);
