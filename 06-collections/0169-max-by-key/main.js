const xs = ["a", "bbb", "cc"];
const longest = xs.reduce((best, x) => (x.length > best.length ? x : best));
console.log(longest);
