const isLeap = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

const result = [2000, 1900, 2024].map((y) => (isLeap(y) ? "yes" : "no"));
console.log(result.join(" "));
