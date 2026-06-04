function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

assert(1 + 1 === 2, "1 + 1 should be 2");
assert("ab" + "cd" === "abcd", "string concat");
assert([1, 2, 3].length === 3, "array length");

console.log("all passed");
