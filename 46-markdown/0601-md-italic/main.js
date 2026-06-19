// JavaScript — markdown-it, ESM. Run: node main.js
// CRITICAL: use the 'commonmark' preset so output matches the other renderers.
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt('commonmark');
process.stdout.write(md.render("*italic*").replace(/\n+$/, ""));
