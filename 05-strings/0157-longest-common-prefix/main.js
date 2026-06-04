const commonprefix = ["flower", "flow", "flight"];
let prefix = commonprefix[0];
for (const word of commonprefix.slice(1)) {
  let j = 0;
  while (j < prefix.length && j < word.length && prefix[j] === word[j]) {
    j++;
  }
  prefix = prefix.slice(0, j);
}
console.log(prefix);
