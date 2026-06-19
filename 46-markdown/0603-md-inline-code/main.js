// JavaScript — markdown-it, ESM. Run: node main.js
// CRITICAL: use the 'commonmark' preset so output matches the other renderers.
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt('commonmark');
const src = '`code`';
process.stdout.write(md.render(src).replace(/\n+$/, ''));
