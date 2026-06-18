import Papa from 'papaparse';

const data = "name,age,city\nAlice,30,Paris\nBob,25,London\nCarol,35,Berlin\n";

const rows = Papa.parse(data.trim(), { header: true, skipEmptyLines: true }).data;
const sum = rows.reduce((s, r) => s + parseInt(r.age, 10), 0); // 30 + 25 + 35
console.log(sum); // 90
