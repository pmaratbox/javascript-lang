import Handlebars from 'handlebars';

const src = '{{#each users}}{{name}}: {{age}}{{#unless @last}}\n{{/unless}}{{/each}}';
const template = Handlebars.compile(src);

const data = {
  users: [
    { name: 'alice', age: 30 },
    { name: 'bob', age: 25 },
  ],
};

console.log(template(data));
