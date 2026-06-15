import { Command } from 'commander';

const program = new Command();
program.option('--verbose', 'enable verbose output');

// Hardcoded argv for deterministic output (no real process args).
program.parse(['node', 'x', '--verbose']);

console.log(program.opts().verbose === true);
