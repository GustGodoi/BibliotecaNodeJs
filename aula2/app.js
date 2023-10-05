// Usando a biblioteca fs = fileSystem

import fs from 'fs';
import chalk from 'chalk';

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';

    fs.readFile(caminhoDoArquivo, encoding, (error, textoArquivo) => {
        console.log(chalk.green(textoArquivo));
    })
}

textoEncontrado = pegaArquivo('./arquivos/texto.md');

export { textoEncontrado };
