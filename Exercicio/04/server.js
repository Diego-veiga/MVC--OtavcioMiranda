const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {routes} = require('./routes')
require('dotenv').config()

mongoose.connect(process.env.CONNECTIONSTRING,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    
    app.emit('pronto')

})

app.use(express.urlencoded({extended:true}))
app.use(routes)

app.on('pronto', ()=>{
    app.listen(3000, ()=>{
        console.log('Servidor rodando aporta 3000')
    })
    
})
