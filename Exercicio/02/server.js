const express = require('express')
const app = express()
const routes = require('./routes')
const midwere = require('./midiweres/mideweres')

app.use(midwere.midewere)
app.use(routes)

app.listen(3000)