const { urlencoded, json } = require('express')
const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({extended: true}))
app.use(routes)
app.use(express.json())


app.listen(4000, () => console.log('servidor executando na porta 4000'))