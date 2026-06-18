import yaml from 'js-yaml';

// Build a fixed map, then let js-yaml serialize it to sorted block-style YAML.
const m = { name: 'Alice', age: 30, city: 'Paris' };

process.stdout.write(yaml.dump(m, { sortKeys: true }));
