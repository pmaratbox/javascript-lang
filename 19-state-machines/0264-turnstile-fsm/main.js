const table = {
  locked: { coin: "unlocked", push: "locked" },
  unlocked: { coin: "unlocked", push: "locked" },
};

let state = "locked";
const events = ["coin", "push", "push"];
const visited = [];
for (const event of events) {
  state = table[state][event];
  visited.push(state);
}

console.log(visited.join(" "));
