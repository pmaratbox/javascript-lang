import { Command } from 'commander';

const program = new Command();
program.argument('<name>');
program.parse(['node', 'x', 'alice']);

const [name] = program.processedArgs;
console.log(name);
