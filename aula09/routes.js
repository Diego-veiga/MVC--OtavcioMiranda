const express = require('express')
const route = express.Router()
const homeController = require('./Controllers/homeController')

route.get('/', homeController.paginaInicial)

module.exports = route



