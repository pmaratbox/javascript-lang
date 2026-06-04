// Zeller's congruence for the Gregorian calendar.
function weekday(year, month, day) {
  if (month < 3) {
    month += 12;
    year -= 1;
  }
  const K = year % 100;
  const J = Math.floor(year / 100);
  const h =
    (day +
      Math.floor((13 * (month + 1)) / 5) +
      K +
      Math.floor(K / 4) +
      Math.floor(J / 4) +
      5 * J) %
    7;
  // h: 0=Saturday, 1=Sunday, ... 6=Friday
  const names = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  return names[h];
}

console.log(weekday(2000, 1, 1));
