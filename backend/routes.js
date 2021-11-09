const express = require('express')
const route = express.Router()
const formController = require('./controllers/formController')
const rightPanelController = require('./controllers/rightPanelController')

route.post('/', formController.retornaDados)
route.get('/recentlySearchedCitiesDatas', rightPanelController.recentlySearchedCitiesDatas)
route.get('/popularCitiesData', rightPanelController.popularCitiesData)


module.exports = route