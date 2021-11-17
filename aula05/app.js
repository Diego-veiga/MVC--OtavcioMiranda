const fs = require('fs').promises
const path = require('path')
const escrever = require('./modules/escrever')
const ler = require('./modules/ler')

const caminhoArquivo = path.resolve(__dirname,  'teste.json')

// // const pessoas =[
// //     {nome:'Diego'},
// //     {nome:'Danilo'},
// //     {nome:'Walter'},
// //     {nome:'Fabricio'},
// //    ]

// //    const json = JSON.stringify(pessoas,'',2)

//    escrever(caminhoArquivo,json)

async function lerArquivo(caminho){
    const dados = await ler(caminho)
    reendenizaDados(dados)
}

function reendenizaDados(dados){
    console.log(dados)
    const onj = JSON.parse(dados)
     onj.forEach(o => console.log(o.nome))
}
 lerArquivo(caminhoArquivo)
