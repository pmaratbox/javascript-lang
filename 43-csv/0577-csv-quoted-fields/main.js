import Papa from 'papaparse';

const text = 'name,note\nAlice,"hello, world"\n';
const rows = Papa.parse(text.trim(), { skipEmptyLines: true }).data;
console.log(rows[1][1]);
