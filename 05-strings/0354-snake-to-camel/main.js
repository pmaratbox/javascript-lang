function snakeToCamel(s) {
  const [first, ...rest] = s.split("_");
  return first + rest.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}

console.log(snakeToCamel("hello_world"));
