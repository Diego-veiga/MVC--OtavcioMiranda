 const express = require('express')
 const routes = express.Router()
 const homeController = require('./src/controller/homeController')
 const loginController = require('./src/controller/loginController')
 const produtoController = require('./src/controller/produtoController')
 const middleware = require('./src/middlewares/middlewares')

 routes.get('/', homeController.index)

 //rotas de login
 routes.get('/login/index', loginController.index)
 routes.post('/login/register', loginController.register)
 routes.post('/login/login', loginController.login)
 routes.get('/login/logout', loginController.logout)

 //rotas de produto 

 routes.get('/produto/index', middleware.cadProduto, produtoController.index)
 routes.post('/produto/register',  middleware.cadProduto, produtoController.register)
 routes.get('/produto/index/:id',  middleware.cadProduto, produtoController.ediProd)
 routes.post('/produto/edit/:id',  middleware.cadProduto, produtoController.edit)


 module.exports={routes}