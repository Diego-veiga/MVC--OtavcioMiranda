const { text } = require('express')
const mongoose = require('mongoose')

const produtoSchema  =  mongoose.Schema({
    nome: {
        type:String,
        require:true
    },
    preco:{
        type:Number,
        require:true
    }
})

 const produtoModel = mongoose.model('produto', produtoSchema)

 module.exports =produtoModel