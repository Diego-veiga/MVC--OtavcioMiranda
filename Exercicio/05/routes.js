const express = require('express')
const routes = express.Router()
const apController = require('./src/Controller/apController')

routes.get('/', apController.index )

module.exports ={ routes}
