import { Command } from 'commander';

const collect = (value, previous) => previous.concat(parseInt(value, 10));

const program = new Command();
program.option('--num <n>', 'a number (may repeat)', collect, []);
program.parse(['node', 'x', '--num', '1', '--num', '2', '--num', '3']);

const nums = program.opts().num;
console.log(nums.reduce((a, b) => a + b, 0));
