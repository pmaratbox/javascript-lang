const p1 = Object.freeze({ x: 1, y: 2 });
const p2 = { ...p1, x: 9 };
console.log(`original: (${p1.x}, ${p1.y})`);
console.log(`updated: (${p2.x}, ${p2.y})`);
