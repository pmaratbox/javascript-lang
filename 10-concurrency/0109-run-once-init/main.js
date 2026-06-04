// Ensure init runs exactly once even when several tasks race to trigger it.
// A memoized promise plays the role of a Once/lazy primitive.
let initCount = 0;
let initPromise = null;

function init() {
  if (initPromise === null) {
    initPromise = Promise.resolve().then(() => {
      initCount += 1; // runs exactly once
    });
  }
  return initPromise;
}

async function main() {
  // Several "threads" race to trigger initialization.
  await Promise.all([init(), init(), init(), init(), init()]);
  console.log(`init count: ${initCount}`);
}

main();
