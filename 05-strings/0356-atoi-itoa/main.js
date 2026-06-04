function atoi(s) {
  let i = 0;
  let sign = 1;
  if (s[i] === "-") {
    sign = -1;
    i++;
  } else if (s[i] === "+") {
    i++;
  }
  let n = 0;
  for (; i < s.length; i++) {
    n = n * 10 + (s.charCodeAt(i) - 48);
  }
  return sign * n;
}

function itoa(n) {
  if (n === 0) return "0";
  const neg = n < 0;
  let m = Math.abs(n);
  let out = "";
  while (m > 0) {
    out = String.fromCharCode(48 + (m % 10)) + out;
    m = Math.trunc(m / 10);
  }
  return neg ? "-" + out : out;
}

const parsed = atoi("-42");
console.log(`${parsed} ${itoa(parsed)}`);
