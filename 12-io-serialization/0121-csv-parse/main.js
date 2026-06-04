const input = "alice,30\nbob,25";

const pairs = input
  .split("\n")
  .map((line) => {
    const [name, value] = line.split(",");
    return `${name}=${value}`;
  });

console.log(pairs.join(" "));
