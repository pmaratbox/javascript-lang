// Extract table cells — cheerio, ESM. Run: node main.js
import * as cheerio from 'cheerio';

const DOC = `<table><tr><td>r1c1</td><td>r1c2</td></tr><tr><td>r2c1</td><td>r2c2</td></tr></table>`;

const $ = cheerio.load(DOC);

// Select every <td> cell, take each element's text, join row-major with commas.
console.log($("td").map((i, e) => $(e).text()).get().join(","));
