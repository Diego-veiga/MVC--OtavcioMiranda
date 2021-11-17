exports.paginaInicial =((req, resp, next)=>{
 
   console.log(req.session.usuario)
    resp.render('index')
    return
})

exports.cadastro =((req, resp)=>[
    resp.send(req.body)
])

