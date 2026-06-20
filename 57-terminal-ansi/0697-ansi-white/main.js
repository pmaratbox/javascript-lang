// chalk, ESM. Force color with level 1 (basic 16-color) so it emits ANSI
// even when stdout is not a TTY. chalk resets the foreground with \x1b[39m.
import { Chalk } from 'chalk';

const c = new Chalk({ level: 1 });
console.log(c.white("white")); // \x1b[37mwhite\x1b[39m
