// Set the env var BEFORE requiring 'config' so node-config picks it up.
process.env.APP_NAME = 'from-env';

const config = require('config');

// node-config merges custom-environment-variables.json (APP_NAME -> name) with
// HIGHER priority than config/default.json, overriding name from "myapp".
console.log(config.get('name'));
