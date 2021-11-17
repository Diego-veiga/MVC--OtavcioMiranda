 const Produto = require('../model/produtoModel')
exports.index = (req, resp, next)=>{
   const produtos = Produto.todosProdutos()
    
    resp.render('index', {produtos})
    
}