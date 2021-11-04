const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')



app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(4000, () => console.log('servidor executando na porta 4000'))