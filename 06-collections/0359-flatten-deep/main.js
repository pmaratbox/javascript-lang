const nested = [1, [2, [3, 4]], 5];

function* flatten(xs) {
  for (const x of xs) {
    if (Array.isArray(x)) {
      yield* flatten(x);
    } else {
      yield x;
    }
  }
}

console.log([...flatten(nested)].join(" "));
