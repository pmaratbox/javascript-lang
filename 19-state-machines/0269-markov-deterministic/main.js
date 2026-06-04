const next = { A: "B", B: "C", C: "A" };

let state = "A";
const visited = [];
for (let i = 0; i < 3; i++) {
  state = next[state];
  visited.push(state);
}

console.log(visited.join(" "));
