const clienteModel = require('../model/clienteModel')

clienteModel.create({
    nome:'Aline',
    idade:31
}).then((dados)=> console.log(dados))

exports.listCliente=( req, resp, next)=>{
    const resul = clienteModel.find().then((dados)=>{
         
        resp.send(`<p> ${dados}}</p>`)
    })

    
}