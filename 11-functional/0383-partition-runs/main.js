const data = [1, 1, 2, 3, 3, 3];

const runs = [];
for (const x of data) {
  const last = runs[runs.length - 1];
  if (last && last[0] === x) last.push(x);
  else runs.push([x]);
}

console.log(runs.map((run) => run.join(" ")).join("|"));
