const mongoose = require('mongoose')

const clienteSchema = mongoose.Schema({
    nome:{ type: String,
           require:true
    },
    idade:{
        type:Number,
        require:true
    }
})

 const clienteModel = mongoose.model( 'cliente', clienteSchema)

 module.exports = clienteModel