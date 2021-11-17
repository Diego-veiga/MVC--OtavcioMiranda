const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const middleware = require('./src/middlewares/middlewares')
const mongoose = require('mongoose')
require('dotenv').config()

const session = require('express-session')
const MongoStore =require('connect-mongo')
const flash = require('connect-flash')

mongoose.connect(process.env.CONNECTIONSTRING,{ useNewUrlParser: true, useUnifiedTopology: true } )
   .then(()=> {
       console.log('conectei no banco de dados')
       app.emit('pronto')
   })


app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'sdasfsad6516a4sd6a1d6qw4dd4qw84dwq',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000* 60 * 60 * 24 * 7,
        httpOnly:true
    }
})

app.use(sessionOptions)
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine','ejs')

app.use(middleware)

app.use(routes)

app.on('pronto',()=>{
    app.listen(3000, ()=>{
        console.log('servidor rodando na porta 3000')
    })
})



