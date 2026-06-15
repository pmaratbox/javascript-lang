import { Command } from 'commander';

const program = new Command();
program.option('--name <n>');
program.parse(['node', 'x', '--name', 'alice']);

console.log(program.opts().name);
