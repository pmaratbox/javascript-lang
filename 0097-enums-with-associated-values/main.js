function area(shape) {
  if (shape.type === "rect") return shape.w * shape.h;
  return shape.s * shape.s;
}

const shapes = [
  { type: "rect", w: 2, h: 3 },
  { type: "square", s: 4 },
];
for (const shape of shapes) {
  console.log(area(shape));
}
