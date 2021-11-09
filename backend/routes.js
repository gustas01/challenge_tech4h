const express = require('express')
const route = express.Router()
const formController = require('./controllers/formController')


route.post('/', formController.retornaDados)
route.get('/contato', formController.dadosRightPanel)


module.exports = route