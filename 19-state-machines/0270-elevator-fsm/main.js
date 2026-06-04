const targets = [2, 0];

let floor = 0;
const stops = [floor];
for (const target of targets) {
  const step = target > floor ? 1 : -1;
  while (floor !== target) {
    floor += step;
    stops.push(floor);
  }
}

console.log(stops.join(" "));
