const express = require('express')
const app = express()
const route = require('./routes')

app.use(route)
app.listen(3000)

 app.use(express.urlencoded({extended:true}))

