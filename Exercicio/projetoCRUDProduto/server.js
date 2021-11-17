const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const { routes } = require('./routes')
require('dotenv').config()
const {middleware,csrfMiddleware,checkCsrfError,middlewareGlobal} = require('./src/middlewares/middlewares')
const helmet = require('helmet')
const csurf = require('csurf')
const crsf= require('csurf')
const session = require('express-session')
const MongoStore =require('connect-mongo')
const flash = require('connect-flash')

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
    app.emit('pronto')
})
app.use(express.urlencoded({extended:true}))
app.use(express.json())

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

app.set('views', path.resolve(__dirname,'src', 'views'))
app.set('view engine', 'ejs')

app.use(helmet())
app.use(csurf())

app.use(middleware)
app.use(csrfMiddleware)
app.use(middlewareGlobal)
app.use(checkCsrfError)

app.use(routes)


app.on('pronto', ()=>{
    app.listen(3000, ()=>{
        console.log('servidor rodando na porta 3000')
    })
})
