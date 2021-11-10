const { default: axios } = require('axios')
const salvarNaTabela = require('../entries/cidadeTabela')
const Cidade = require('../models/cidade')
require('dotenv').config()

exports.retornaDados = async (req, res) => {
    const {cityName} = req.body
    
    const cityNameComplete = cityName.split(' ').join('+')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameComplete}&appid=${process.env.TOKENAPI}`

    try{
        const weatherData = await axios.get(url)
        const response = weatherData.data
        await salvarNaTabela(response.name, response.sys.country, (response.main.temp - 273).toFixed(2), response.main.humidity, response.weather[0].description)
    }catch(err){
        console.log(err)
    }



    const dadosFront = await Cidade.findAll({
        attributes: ['name', 'country', 'mainTemp', 'humidity', 'weather']
     })

    const dadosTratados = dadosFront.map(function(el) { return el.dataValues }).reverse()
    

    return res.send(dadosTratados)
}

