import { Command } from 'commander';

const program = new Command();

program
  .command('add')
  .argument('<a>', 'first integer', Number)
  .argument('<b>', 'second integer', Number)
  .action((a, b) => {
    console.log(a + b);
  });

// Parse a hardcoded argv for deterministic output.
program.parse(['node', 'x', 'add', '2', '3']);
