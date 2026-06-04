function withCounter(fn) {
  const wrapped = (...args) => {
    wrapped.calls += 1;
    return fn(...args);
  };
  wrapped.calls = 0;
  return wrapped;
}

const noop = withCounter(() => {});
for (let i = 0; i < 5; i++) noop();
console.log(`calls: ${noop.calls}`);
