const lens = (getter, setter) => ({ get: getter, set: setter });

const bLens = lens(
  (s) => s.a.b,
  (s, v) => ({ ...s, a: { ...s.a, b: v } })
);

const obj = { a: { b: 1 } };
const got = bLens.get(obj);
const updated = bLens.set(obj, 2);

console.log(`${got} ${updated.a.b}`);
