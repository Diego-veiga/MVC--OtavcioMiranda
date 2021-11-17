exports.paginaInicial =((req, resp, next)=>{
    resp.render('index', {
        titulo: 'Este é o titulo  da pagina ',
        numeros: [1,2,3,4,5,6,7,8,9]

    })
    return
})

exports.cadastro =((req, resp)=>{
    console.log(req.body)
    resp.send(req.body)
})

