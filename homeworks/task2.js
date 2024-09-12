import chalk from "chalk";

let someText = 'Hello Colours'
console.log(chalk.magenta(someText))

console.log(chalk.green('Hello') + chalk.cyan(' World') + chalk.red('!'))

// console.log(chalk.green(
// 	'I am a green line ' +
//  	chalk.blue.underline.bold('with a blue substring') +
//  	' that becomes green again!'
// ));
// only colours are applied

console.log(`
    CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}
    `);