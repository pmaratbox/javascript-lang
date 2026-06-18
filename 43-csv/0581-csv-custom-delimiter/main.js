import Papa from 'papaparse';

const data = "a;b;c\n1;2;3\n";
const rows = Papa.parse(data.trim(), { delimiter: ";", skipEmptyLines: true }).data;
console.log(rows[1].join(","));   // 1,2,3
