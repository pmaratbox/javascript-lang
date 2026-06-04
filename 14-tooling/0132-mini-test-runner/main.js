function assert(cond) {
  if (!cond) throw new Error("assertion failed");
}

const tests = [
  ["adds", () => assert(1 + 1 === 2)],
  ["concats", () => assert("a" + "b" === "ab")],
  ["compares", () => assert(2 > 1)],
];

let passed = 0;
let failed = 0;
for (const [, fn] of tests) {
  try {
    fn();
    passed++;
  } catch {
    failed++;
  }
}

console.log(`${passed} passed, ${failed} failed`);
