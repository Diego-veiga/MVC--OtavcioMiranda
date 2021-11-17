exports.paginaInicial =((req, res)=>{
    res.render('index')
    
})
exports.cadastro =((req, resp)=>[
    resp.send('<span> cadastro enviado com sucesso')
])

