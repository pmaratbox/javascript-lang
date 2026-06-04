const substring = "ababab";
const needle = "ab";
let count = 0;
let i = 0;
while ((i = substring.indexOf(needle, i)) !== -1) {
  count++;
  i += needle.length;
}
console.log(count);
