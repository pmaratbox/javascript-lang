const price = 25;
const coins = [10, 10, 5];

let total = 0;
let state = "collecting";
for (const coin of coins) {
  total += coin;
  if (total >= price) {
    state = "dispensing";
    break;
  }
}

if (state === "dispensing") {
  console.log("dispensed");
}
