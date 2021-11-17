const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect(process.env.CONNECTIONSTRING,{useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
    console.log('Conectei no banco de dados ')
  app.emit('pronto')
})

app.use(express.urlencoded({extended:true}))

app.set('views', path.resolve(__dirname,'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.on('pronto',()=>{
    app.listen(3000, ()=>{
        console.log('servido rodando na porta 3000')
    })
})
