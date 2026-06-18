import { parse as parseToml } from 'smol-toml';

const doc = parseToml('title = "demo"\nversion = 2\n');
console.log(`${doc.title} ${doc.version}`);
