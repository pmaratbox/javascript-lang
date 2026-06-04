function divisibleBy3(bits) {
  let state = 0;
  for (const ch of bits) {
    const b = ch === "1" ? 1 : 0;
    state = (state * 2 + b) % 3;
  }
  return state === 0 ? "yes" : "no";
}

console.log(`${divisibleBy3("110")} ${divisibleBy3("100")}`);
