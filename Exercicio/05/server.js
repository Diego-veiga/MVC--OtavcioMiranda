const express = require('express')
const app = express()
const mongoose  = require('mongoose')
require('dotenv').config()
const path = require('path')

const {routes} = require('./routes')

mongoose.connect(process.env.CONNECTIONSTRING,{ useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=>{
    console.log('Conexão base dedados realizada com sucesso')
    app.emit('pronto')
})

app.use(express.urlencoded({extended:true}))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine','ejs')

app.use(routes)


app.on('pronto',()=>{
  app.listen(3000, ()=>{
      console.log('servidor rodando na porta 3000')
  })
})