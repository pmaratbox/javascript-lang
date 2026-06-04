const gray = (n) => n ^ (n >> 1);

const codes = [0, 1, 2, 3].map(gray);
console.log(codes.join(" "));
