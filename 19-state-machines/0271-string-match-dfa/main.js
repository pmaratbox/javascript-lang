const pattern = "ab";
const text = "aab";

let state = 0;
let matchIndex = -1;
for (let i = 0; i < text.length; i++) {
  if (text[i] === pattern[state]) {
    state++;
  } else {
    state = text[i] === pattern[0] ? 1 : 0;
  }
  if (state === pattern.length) {
    matchIndex = i - pattern.length + 1;
    break;
  }
}

console.log(matchIndex);
