import { writeFileSync, readFileSync, unlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const path = join(tmpdir(), `fileroundtrip-${process.pid}.txt`);
const data = "ok-data";

writeFileSync(path, data);
const readBack = readFileSync(path, "utf8");
unlinkSync(path);

console.log(`roundtrip: ${readBack === data ? "ok" : "fail"}`);
