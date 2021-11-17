const cachorro = require('./mod1')
const path = require('path')

const c = new cachorro('escube')
console.log(c.falar())

// const multiplica = require('./mod1')
// console.log(multiplica(2,3))


///   ./ para ir para frente 
///  ../ para voltar 

console.log(__dirname)
console.log(__filename)

console.log(path.resolve(__dirname,'..','..'))


