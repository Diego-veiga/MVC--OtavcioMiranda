const mongoose = require('mongoose')
const validator = require('validator')


const ContatoSchema = mongoose.Schema({
    nome:{type:String, required:true},
    sobrenome:{type:String, required:false, default:''},
    email:{type:String, required:false, default:''},
    telefone:{type:String, required:false, default:''},
    criadoEm:{type:Date,  default:Date.now},
   
})

const ContatoModel =mongoose.model('Contato', ContatoSchema)

function Contato(body){
    this.body = body,
    this.erros = [],
    this.contato = null
}

Contato.prototype.register =  async function(){
    this.valida()
    if(this.erros.length >0) return
    
    this.contato=await ContatoModel.create(this.body)   
}

Contato.prototype.edit = async function(id){
    this.valida()
    if(this.erros.length >0) return

     this.contato = await ContatoModel.findOneAndUpdate(id, this.body, {new:true})
}

Contato.prototype.valida= function(){

    this.CleanUp()
    if( this.body.email && !validator.isEmail(this.body.email)){
        this.erros.push('Email invalido')
    }
    if(!this.body.nome){
        this.erros.push('Nome é um campo obrigatório')  
    }
    if(!this.body.email && ! this.body.telefone){
        this.erros.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.')  
    }
}

Contato.prototype.CleanUp= function(){
    for(const key in this.body){
        if(typeof this.body[key] !== 'string'){
            this.body[key]=''
        }
    }
    this.body ={
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        telefone: this.body.telefone,
        email: this.body.email
    }
}
Contato.buscaPorId = async function(id){
    if(typeof id !=='string') return
    const contato = await ContatoModel.findById(id)
    return  contato
}

Contato.delete = async function(id){
    if(typeof id !=='string') return
    const contato = await ContatoModel.findOneAndDelete(id)
    return  contato
}


Contato.buscaContatos = async function (){
    const contatos = await ContatoModel.find().sort({criadoEm:-1})
    
    return  contatos
}

module.exports = Contato