import Papa from 'papaparse';

const data = "name,age,city\nAlice,30,Paris\nBob,25,London\nCarol,35,Berlin\n";

// Parse with header objects so we can address the column by name.
const objs = Papa.parse(data.trim(), { header: true, skipEmptyLines: true }).data;

// Extract the `age` column from each data row and join with commas.
console.log(objs.map(o => o.age).join(",")); // 30,25,35
