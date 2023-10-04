// Biblioteca Node JS

// const chalk = require('chalk'); -->> formato antigo de importação]
import chalk from 'chalk';

const correct = chalk.hex('#4ce600'); // Green color
const warning = chalk.hex('#FFA500'); // Orange color
const error   = chalk.bold.red;

console.log(correct('olá mundo.'));
console.log(error('Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'));
console.log(warning('Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'));