const data = [1, 2, 3, 4];

let acc = 1;
const scan = data.map((x) => (acc *= x));

console.log(scan.join(" "));
