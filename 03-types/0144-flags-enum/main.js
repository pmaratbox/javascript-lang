const READ = 1;
const WRITE = 2;

const flags = READ | WRITE;
const hasWrite = (flags & WRITE) !== 0;

console.log(`${flags} ${hasWrite ? "yes" : "no"}`);
