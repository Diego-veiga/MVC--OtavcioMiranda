const nome = 'Diego'
const sobrenome='Veiga'

const falaNome =() => `${nome} ${sobrenome}`


class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}
// module.exports.nome= nome
// module.exports.sobrenome =sobrenome
// module.exports.falaNome = falaNome

// exports.nome = nome
// exports.sobrenome = sobrenome
// exports.falaNome = falaNome
// this.qualquercoisa ='O que eu quiser exportar'

module.exports ={
 Pessoa,
  nome, 
  sobrenome,
  falaNome,
}
