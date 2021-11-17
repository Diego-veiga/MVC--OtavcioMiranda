const Contato = require('../model/contatoModel')

exports.index =(req, res)=>{
    res.render('contato',{
        contato:{}
    })
}

exports.register = async(req, res)=>{
    try {
         const contato = new Contato(req.body)
         await contato.register()
         if(contato.erros.length > 0){
             req.flash('erros', contato.erros)
             req.session.save(()=>{
                 res.redirect('index')
             })
             return
         }
         req.flash('sucess', 'Contato cadastrado com sucesso')
         
         req.session.save(()=> res.redirect(`/contato/index/${contato.contato._id}`))
         return
        
    } catch (error) {
        
        console.log(error)
        return res.redirect('404')
        
    }
}


exports.editIndex = async function (req, res){   

    if(!req.params.id) return res.render('404')
    const contato = await Contato.buscaPorId(req.params.id)
    if(!contato) return res.render('404')
    return res.render('contato',{contato})
}

 exports.edit = async(req, res)=>{
     const contato = new Contato(req.body)
      await contato.edit(req.params.id)
      if(contato.erros.length>0){
          req.flash("erros", contato.erros)
          req.session.save(()=>{
              res.redirect('index')
          })
          return
       }

      req.flash('sucess', 'Contato editado com sucesso')
      req.session.save(()=>{
        req.session.save(()=> res.redirect(`/contato/index/${contato.contato._id}`))
      })
      return
 }

 exports.delete = async function(req, res){
   if(!req.params.id) return  res.render('404')
   const contato  = await Contato.delete(req.params.id)
   if(!contato) return res.render('404')

   req.flash('sucess', 'Contato excluido com sucesso')
   req.session.save(()=>{
     req.session.save(()=> res.redirect('back'))
   })

 }