try {
  throw new Error("boom");
} catch (err) {
  console.log("caught");
} finally {
  console.log("cleanup");
}
