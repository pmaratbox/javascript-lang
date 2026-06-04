function makeShape(name) {
  const shapes = {
    circle: { kind: "circle" },
    square: { kind: "square" },
  };
  return shapes[name];
}

const a = makeShape("circle");
const b = makeShape("square");
console.log(`${a.kind} ${b.kind}`);
