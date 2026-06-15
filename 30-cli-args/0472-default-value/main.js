import { Command } from 'commander';

const program = new Command();
program.option('--count <n>', 'a count', (v) => parseInt(v, 10), 1);

// Parse a HARDCODED, empty argv so output is deterministic.
program.parse(['node', 'x']);

console.log(program.opts().count);
