// Read a top-level config value with node-config.
// Loads config/default.json and reads the top-level string `name`.
const config = require('config');
console.log(config.get('name'));
