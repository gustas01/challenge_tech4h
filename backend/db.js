require('dotenv').config()
const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(`postgres://${process.env.USER}:${process.env.PASSWORD}@localhost:${process.env.PORT}/${process.env.DBNAME}`)


module.exports = sequelize