const express = require('express')
const route = express.Router()
const formController = require('./controllers/formController')


route.post('/', formController.retornaDados)

module.exports = route