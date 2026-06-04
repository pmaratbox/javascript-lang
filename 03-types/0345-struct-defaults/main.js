const makePoint = ({ x = 0, y = 0 } = {}) => ({ x, y });

const a = makePoint();
const b = makePoint({ x: 5 });

console.log(`${a.x} ${a.y}`);
console.log(`${b.x} ${b.y}`);
