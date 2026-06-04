const houses = [2, 7, 9, 3, 1];

let rob = 0;
let skip = 0;
for (const money of houses) {
  [rob, skip] = [skip + money, Math.max(rob, skip)];
}

console.log(Math.max(rob, skip));
