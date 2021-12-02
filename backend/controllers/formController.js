const { default: axios } = require('axios')
const salvarNaTabela = require('../entries/cidadeTabela')

require('dotenv').config()

exports.retornaDados = async (req, res) => {
    const {cityName} = req.body
    let dadosTratados = {}

    const cityNameComplete = cityName.split(' ').join('+').normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameComplete}&units=metric&appid=${process.env.TOKENAPI}`

    try{
        const weatherData = await axios.get(url)
        const response = weatherData.data

        await salvarNaTabela(response.name, response.sys.country, (response.main.temp).toFixed(2), response.main.humidity, response.weather[0].description)
        dadosTratados = {
            name: await response.name,
            country: await response.sys.country,
            mainTemp: await response.main.temp,
            humidity: response.main.humidity,
            weather: response.weather[0].description 
    }
    }catch(err){
        console.log(err)
    }


    return res.send(dadosTratados)
}

