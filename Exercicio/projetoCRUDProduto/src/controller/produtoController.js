 const Produto = require('../model/produtoModel')
exports.index = (req, res) =>{
    
    res.render('produto', produto={})
}

exports.register = async(req, res)=>{
   
    try {
        const produto = new Produto(req.body) 
       await produto.register()
  
       if(produto.erros.length>0){
         req.flash('erros', produto.erros)
         req.session.save(()=>{
            res.redirect('index')
         })
           return
       }

       req.flash('success', 'produto cadastrado com sucesso')
         req.session.save(()=>res.redirect(`index/${produto.produto.id}`))
       return
    
    } catch (error) {
        console.log(error)
        res.render('404')        
    }
    
}
exports.ediProd= async function(req, res){

    if(!req.params.id){
        return res.render('404')
    } 

    try {
      const produto =  await Produto.searchProduct(req.params.id)
      if(!produto) return res.render('404')
      res.render('produto',{produto})
        
    } catch (error) {
      console.log(error)  
      return res.render('404') 
    }

}


exports.edit = async(req, res)=>{
    console.log('req.params.id',req.params.id)
 if(!req.params.id) return res.render('404')

 try {
     const produto = new Produto(req.body)
     await produto.edit(req.params.id)
     if(produto.erros.length>0){
        req.flash('erros', produto.erros)
        req.session.save(()=>{
            res.redirect('index')
        })
        return
    }
     req.flash('success', 'Produto editado com sucesso')
     req.session.save(()=>{
        res.redirect(`/produto/index/${produto.produto.id}`)
     })
 } catch (error) {
     console.log(error)
     res.render('404')
     
 }
}