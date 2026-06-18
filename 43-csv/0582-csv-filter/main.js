import Papa from 'papaparse';

const data = "name,age,city\nAlice,30,Paris\nBob,25,London\nCarol,35,Berlin\n";
const objs = Papa.parse(data.trim(), { header: true, skipEmptyLines: true }).data;
const kept = objs.filter(o => parseInt(o.age) > 28).map(o => o.name);
console.log(kept.join(","));
