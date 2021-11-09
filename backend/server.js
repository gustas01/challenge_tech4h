const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const sequelize = require('./db')


app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())
app.use(routes)


sequelize.authenticate()
    .then(console.log('conexão com o BD autenticada'))
    .then(app.listen(4000, () => console.log('servidor executando na porta 4000')))
    .catch(error => console.log('conexão com o BD não autenticado:', error))
