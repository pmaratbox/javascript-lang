const deferred = [];
const defer = (fn) => deferred.push(fn);

defer(() => 1);
defer(() => 2);
defer(() => 3);

const out = [];
while (deferred.length) {
  out.push(deferred.pop()());
}
console.log(out.join(" "));
