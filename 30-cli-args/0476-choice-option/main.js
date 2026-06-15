import { Command, Option } from 'commander';

const program = new Command();
program.addOption(
  new Option('--color <color>').choices(['red', 'green', 'blue'])
);
program.parse(['node', 'x', '--color', 'green']);

console.log(program.opts().color);
