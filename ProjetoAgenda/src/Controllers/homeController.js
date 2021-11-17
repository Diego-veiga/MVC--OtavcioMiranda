const Contato = require('../model/contatoModel')
exports.index = async(req, resp, next)=>{
    const contatos =await Contato.buscaContatos()
   
    resp.render('index',{contatos})
    return
}



