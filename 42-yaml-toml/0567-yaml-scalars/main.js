import yaml from 'js-yaml';

const doc = yaml.load("name: Alice\nrole: admin\nage: 30\n");
console.log(`${doc.name} ${doc.role} ${doc.age}`);
