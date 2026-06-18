import yaml from 'js-yaml';

const doc = yaml.load('fruits:\n  - apple\n  - banana\n  - cherry\n');
console.log(doc.fruits.join(','));
