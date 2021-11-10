const Cidade = require('../models/cidade')
const sequelize = require('../db')
const cityNameComplete = require('../controllers/formController')

module.exports = async function salvarNaTabela(nameValue, countryValue, tempValue, humidityValue, weatherValue){
    try {
        const cidade = await Cidade.create({
            name: nameValue,
            country: countryValue,
            mainTemp: tempValue,
            humidity: humidityValue,
            weather: weatherValue 
        })
    } catch (error) {
        console.log(error);
    }
}
