import pegaArquivo from './aula2/app.js';

const caminho = process.argv;
console.log(caminho[2]);

pegaArquivo(caminho[2]);
