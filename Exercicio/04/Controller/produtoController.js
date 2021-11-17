const produtoModel = require('../model/produtoModel')
produtoCreate = (req, resp, next)=>{
  produtoModel.create({
     nome: req.params.nome,
     preco: req.params.preco,
  })
  .then((dados)=>{
      resp.send(dados)
  })
}
produtoList = (req, resp, next)=>{
  produtoModel.find()
  .then((dados)=>{
      resp.send(dados)
  })

}

module.exports ={
    produtoList,
    produtoCreate

}