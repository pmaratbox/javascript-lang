const next = { red: "green", green: "yellow", yellow: "red" };

let state = "red";
const visited = [];
for (let i = 0; i < 4; i++) {
  state = next[state];
  visited.push(state);
}

console.log(visited.join(" "));
