// Usando a biblioteca fs = fileSystem

import fs from 'fs';
import chalk from 'chalk';
import { endianness } from 'os';

function trataErro(error) {
    throw new Error(chalk.red(error.code, 'não encontrado arquivo no diretório.'));
}

// assincrono
function pegaArquivo() {
    const encoding = 'utf-8';

    fs.promises
      .readFile(caminhoDoArquivo, encoding)
      .then((texto) => console.log(chalk.green(texto)))
      .catch((error) => trataErro(error))
}

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

let textoEncontrado = '';
textoEncontrado = pegaArquivo('./arquivos/texto.md');

export { textoEncontrado };
