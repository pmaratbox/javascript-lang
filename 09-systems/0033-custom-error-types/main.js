class TooLargeError extends Error {}

function check(n) {
  if (n > 100) {
    throw new TooLargeError("value too large");
  }
}

try {
  check(200);
} catch (e) {
  console.log(`error: ${e.message}`);
}
