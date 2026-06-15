import Handlebars from 'handlebars';

Handlebars.registerHelper('upper', (s) => s.toUpperCase());

const template = Handlebars.compile('{{upper name}}');
console.log(template({ name: 'alice' }));
