const row = 'a,"b,c",d';
const fields = [];
let cur = "";
let inQuotes = false;
for (const ch of row) {
  if (ch === '"') inQuotes = !inQuotes;
  else if (ch === "," && !inQuotes) { fields.push(cur); cur = ""; }
  else cur += ch;
}
fields.push(cur);
console.log(fields.join("|"));
