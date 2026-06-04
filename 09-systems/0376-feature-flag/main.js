function evaluate(flag) {
  return flag ? "enabled" : "disabled";
}

console.log(`${evaluate(true)} ${evaluate(false)}`);
