import { parse as parseToml } from 'smol-toml';

const doc = '[[servers]]\nname = "alpha"\n[[servers]]\nname = "beta"\n';
const data = parseToml(doc);
console.log(data.servers.map((s) => s.name).join(','));
