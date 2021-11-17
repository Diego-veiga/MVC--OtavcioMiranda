const express = require('express')

 const app = express()

 app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"/>
    <button>Enviar</button>
    </form/>`)
})
app.post('/', (req, resp)=>{
    console.log(req.body)
    resp.send(` O que foi enviado ${req.body.nome}`)
})

app.get('/testes/:id_usuario?/:nome?', (req, resp)=>{
    console.log(req.params)
    console.log(req.query)
    resp.send(req.params)

})

app.get('/contato', (req, resp)=>{
    resp.send('Obrigado por entrar em contato o com a gente')
})


app.listen(3000,()=>{
    console.log('servidor rodando na porta 3000')
})