import { parse as parseToml } from 'smol-toml';

const t = parseToml('tags = ["red", "green", "blue"]\n');
console.log(t.tags.join(','));
