const express = require('express')
const route  = express.Router()
const cliente = require('./controllers/clienteController')

route.get('/', cliente.getCliente )



module.exports =route