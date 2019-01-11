var chalk = require('./node_modules/chalk');

var message = "Hello " + chalk.yellow("World");
console.log(message);

var g = chalk.green;
var r = chalk.red;
var xmas = '';
xmas += r('M') + g('e') + r('r') + g('r') + r('y') + ' '
+ g('C') + r('h') + g('r') + r('i') + g('s') + r('t') + g('m')
+ r('a') + g('s') + r('!');

console.log(xmas);

var notXmasAnymore = chalk.strikethrough.bold(xmas);

setTimeout(rainOnParade,1000);

function rainOnParade() {
	console.log()
	console.log(notXmasAnymore);
}    

