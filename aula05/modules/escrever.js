const fs = require('fs').promises

module.exports = (caminho, dados)=>{
    fs.writeFile(caminho, dados)
}


// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt')

// fs.writeFile(caminhoArquivo, 'Frase \n', {flag:'a'})