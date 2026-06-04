import { writeFileSync, appendFileSync, readFileSync, unlinkSync } from "node:fs";

const path = "tofile.txt";
writeFileSync(path, "a\n");
appendFileSync(path, "b\n");

const lines = readFileSync(path, "utf8")
  .split("\n")
  .filter((line) => line.length > 0);

console.log(lines.join(" "));

unlinkSync(path);
