function check(arg) {
  if (arg <= 0) {
    throw new Error("must be positive");
  }
  return "ok";
}

for (const arg of [5, -1]) {
  try {
    console.log(check(arg));
  } catch (err) {
    console.log(`error: ${err.message}`);
  }
}
