import Handlebars from 'handlebars';
const t = Handlebars.compile('{{user.name}}');
console.log(t({ user: { name: 'alice' } }));
