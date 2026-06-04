function expandRange(spec) {
  const [start, end] = spec.split("-");
  let out = "";
  for (let c = start.charCodeAt(0); c <= end.charCodeAt(0); c++) {
    out += String.fromCharCode(c);
  }
  return out;
}

console.log(expandRange("a-e"));
