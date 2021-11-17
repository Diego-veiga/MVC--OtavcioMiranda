const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const middleware = require('./src/middlewares/middlewares')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.CONNECTIONSTRING,{ useNewUrlParser: true, useUnifiedTopology: true } )
   .then(()=> {
       console.log('conectei no banco de dados')
       app.emit('pronto')
   })


app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine','ejs')

app.use(middleware)

app.use(routes)

app.on('pronto',()=>{
    app.listen(3000, ()=>{
        console.log('servidor rodando na porta 3000')
    })
})



