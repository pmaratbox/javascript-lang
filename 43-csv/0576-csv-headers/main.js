import Papa from 'papaparse';

const data = "name,age,city\nAlice,30,Paris\nBob,25,London\nCarol,35,Berlin\n";

const rows = Papa.parse(data.trim(), { skipEmptyLines: true }).data; // string[][]
console.log(rows[0].join("|")); // name|age|city
