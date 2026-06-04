function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}
console.log(lcm(4, 6));
