// Usando a biblioteca fs = fileSystem

import fs from 'fs';
import chalk from 'chalk';

// efetua um regex no texto para que ele encontre somente os links e marcações
function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados;
}

function trataErro(error) {
    throw new Error(chalk.red(error.code, 'não encontrado arquivo no diretório.'));
}

// assincrono async/await ->> FORMATO MAIS ATUAL
async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(extraiLinks(texto));

    } catch (error) {
        trataErro(error);
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

// assincrono promises com then
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';

//     fs.promises
//       .readFile(caminhoDoArquivo, encoding)
//       .then((texto) => console.log(chalk.green(texto)))
//       .catch((error) => trataErro(error))
// }

// sincrono
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//
//     fs.readFile(caminhoDoArquivo, encoding, (error, textoArquivo) => {
//         if (error) {
//             trataErro(error);
//         } else {
//             console.log(chalk.green(textoArquivo));
//             return textoArquivo;
//         }
//     })
// }

export default pegaArquivo;