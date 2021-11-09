const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../db')


const Cidade = sequelize.define('Cidade', {
    name : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mainTemp: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    humidity: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    weather: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


Cidade.sync().then(console.log('tabela criada'))



module.exports = Cidade