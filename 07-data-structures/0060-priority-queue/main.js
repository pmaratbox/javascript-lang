// array-backed min-priority-queue: push inserts in sorted order, the front is the minimum
const pq = [];
function push(n) {
  let i = 0;
  while (i < pq.length && pq[i] <= n) i++;
  pq.splice(i, 0, n);
}

for (const n of [3, 1, 2]) push(n);

const out = [];
while (pq.length > 0) {
  out.push(pq.shift());
}
console.log(out.join(" "));
