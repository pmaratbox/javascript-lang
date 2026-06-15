import Handlebars from 'handlebars';

const t = Handlebars.compile('{{items.length}}');
console.log(t({ items: [1, 2, 3] }));
