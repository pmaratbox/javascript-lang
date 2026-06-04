const trampoline = (thunk) => {
  let result = thunk;
  while (typeof result === "function") result = result();
  return result;
};

const sum = (n, acc) =>
  n === 0 ? acc : () => sum(n - 1, acc + n);

console.log(trampoline(sum(100, 0)));
