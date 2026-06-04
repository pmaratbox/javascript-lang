import { writeFileSync, readFileSync, unlinkSync } from "node:fs";

const path = "filelines.txt";
writeFileSync(path, "one\ntwo\nthree\n");

const lines = readFileSync(path, "utf8")
  .split("\n")
  .filter((line) => line.length > 0);

console.log(`lines: ${lines.length}`);

unlinkSync(path);
