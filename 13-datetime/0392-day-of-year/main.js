const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const month = 3, day = 1;
let doy = day;
for (let m = 0; m < month - 1; m++) doy += monthDays[m];
console.log(doy);
