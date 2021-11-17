const express = require('express')


app = express()

app.get('/', (req, res)=>{
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"/>
    <button>Enviar</button>
    </form/>`)
})
app.post('/', (req, resp)=>{
    resp.send('Formulario enviado')
})

app.get('/contato', (req, resp)=>{
    resp.send('Obrigado por entrar em contato o com a gente')
})


app.listen(3000,()=>{
    console.log('servidor rodando na porta 3000')
})