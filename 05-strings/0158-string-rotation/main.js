const a = "abcd";
const b = "cdab";
const isRotation = a.length === b.length && (a + a).includes(b);
console.log(isRotation ? "yes" : "no");
