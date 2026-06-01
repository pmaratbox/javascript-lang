const p1 = Object.freeze({ x: 1, y: 2 });
const p2 = Object.freeze({ x: 1, y: 2 });
console.log(`point: (${p1.x}, ${p1.y})`);
const equal = p1.x === p2.x && p1.y === p2.y;
console.log("equal:", equal ? "yes" : "no");
