const text = "[s]\nk=v";
let section = "";
const out = [];
for (const raw of text.split("\n")) {
  const line = raw.trim();
  if (line.startsWith("[") && line.endsWith("]")) {
    section = line.slice(1, -1);
  } else if (line.includes("=")) {
    const [key, value] = line.split("=");
    out.push(`${section}.${key}=${value}`);
  }
}
console.log(out.join("\n"));
