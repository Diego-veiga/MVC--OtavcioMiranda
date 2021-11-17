exports.paginaInicial =((req, resp, next)=>{
    resp.render('index')
})

exports.cadastro =((req, resp)=>[
    resp.send(req.body)
])

