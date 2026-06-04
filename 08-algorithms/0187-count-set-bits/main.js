let n = 13;
let count = 0;
while (n > 0) {
  count += n & 1;
  n >>>= 1;
}
console.log(count);
