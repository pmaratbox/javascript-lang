// JavaScript — markdown-it, ESM. Run: node main.js  (group 46-markdown/package.json present, type:module)
// CRITICAL: use the 'commonmark' preset so output matches the other renderers.
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt('commonmark');
const src = "> quote";
process.stdout.write(md.render(src).replace(/\n+$/, ""));
