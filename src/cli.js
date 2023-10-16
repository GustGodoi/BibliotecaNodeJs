import pegaArquivo from './aula2/app.js';
import listaValidada from './httpValidacao.js';
import fs, { lstat, lstatSync } from 'fs';
import chalk from 'chalk';

const caminho = process.argv;

async function imprimeLista(valida, nomeDeArquivo = '',resultado) {

    if (valida) {
        console.log(
            chalk.yellow('Lista Validada'),
            chalk.black.bgGreen(nomeDeArquivo),
            await listaValidada(resultado));
    } else {
        console.log(
            chalk.yellow('Lista de links do Arquivo:'),
            chalk.black.bgGreen(nomeDeArquivo),
            resultado);
    }
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminho);
    } catch (error) {
       if (error.code === 'ENOENT') {
        console.log(chalk.red('Arquivo/diretório não encontrado.'));
        return
       }
    }
 
    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        const nomeDeArquivo = caminho;
        imprimeLista(valida, nomeDeArquivo, resultado);
    } else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(valida, nomeDeArquivo, lista);
        })
    }
}

processaTexto(caminho);