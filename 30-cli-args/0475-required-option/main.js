import { Command } from 'commander';

const program = new Command();
program.requiredOption('--id <id>', 'the id', (v) => parseInt(v, 10));

// Parse a hardcoded argv (not process args) so output is deterministic.
program.parse(['node', 'x', '--id', '42']);

console.log(program.opts().id);
