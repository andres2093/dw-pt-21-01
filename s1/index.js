// Crear proyecto de node
// npm init

// Instalar nuevas dependencias "Librerias"
// npm i [nombre-de-la-dependencia]

// Instalar dependencias de package.js
// npm i

// Ejecutar proyecto de node
// node [nombre-de-archivo-js]

var cowsay = require("cowsay");
var cpu = require("os");

console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

// const chalk = require('chalk');
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);