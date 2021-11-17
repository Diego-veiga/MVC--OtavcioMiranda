const express = require('express')
const routes = express.Router()
const {produtoCreate,produtoList} = require('./Controller/produtoController')

routes.get('/Produto/Create/:nome/:preco', produtoCreate)

routes.get('/Produto/list', produtoList)



module.exports ={
    routes
} 