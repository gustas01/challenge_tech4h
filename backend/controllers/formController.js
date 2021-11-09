const { default: axios } = require('axios')
const salvarNaTabela = require('../tables/cidadeTabela')
const Cidade = require('../models/cidade')

exports.retornaDados = async (req, res) => {
    const {cityName} = req.body
    
    const cityNameComplete = cityName.split(' ').join('+')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameComplete}&appid=431742a70c1841a5f481a711fa373143`

    const weatherData = await axios.get(url)
    const response = weatherData.data

  
    const weatherDataToDB = await salvarNaTabela(response.name, response.sys.country, (response.main.temp - 273).toFixed(2), response.main.humidity, response.weather[0].description)


    const dadosFront = await Cidade.findAll({
        attributes: ['name', 'country', 'mainTemp', 'humidity', 'weather']
     })

    const dadosTratados = dadosFront.map(function(el) { return el.dataValues }).reverse()


    return res.send(dadosTratados)
}


exports.dadosRightPanel = async (req, res) => {
    const dadosFront = await Cidade.findAll({
        attributes: ['name', 'country', 'mainTemp', 'humidity', 'weather']
     })

    const dadosTratados = dadosFront.map(function(el) { return el.dataValues }).reverse()


    return res.send(dadosTratados)
}

