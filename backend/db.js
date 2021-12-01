require('dotenv').config()
const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_DBNAME}`)


module.exports = sequelize