const config = require('config');

console.log(config.get('hosts').join(','));
