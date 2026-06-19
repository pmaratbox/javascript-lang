const config = require('config');

console.log(config.has('missing') ? config.get('missing') : 'fallback');
