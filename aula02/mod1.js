module.exports= class Animal{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        return `${this.nome} esta latindo`
    }
}


// module.exports = function(x ,y){
//     return x * y
// }