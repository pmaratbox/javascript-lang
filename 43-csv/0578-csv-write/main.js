import Papa from 'papaparse';

// Write two rows to CSV using papaparse's Papa.unparse writer.
const rows = [
  ["name", "age"],
  ["Alice", "30"],
];

const out = Papa.unparse(rows);

// Normalize \r\n -> \n and strip the trailing newline.
console.log(out.replace(/\r\n/g, "\n").replace(/\n+$/, ""));
