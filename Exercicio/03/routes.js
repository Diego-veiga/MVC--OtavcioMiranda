const express = require('express')
const routes = express.Router()
const clienteController = require('./controller/clienteController')


routes.get('/clientes', clienteController.listCliente)


module.exports = routes