// Color the word "green" with foreground GREEN using chalk (a real ANSI library).
// Force color with level 1 (basic 16-color) so it emits ANSI even without a TTY.
// chalk resets the foreground with \x1b[39m.
import { Chalk } from 'chalk';

const c = new Chalk({ level: 1 });
console.log(c.green("green")); // \x1b[32mgreen\x1b[39m
