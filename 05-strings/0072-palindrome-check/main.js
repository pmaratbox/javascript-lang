for (const word of ["level", "hello"]) {
  const isPal = word === [...word].reverse().join("");
  console.log(`${word}: ${isPal ? "yes" : "no"}`);
}
