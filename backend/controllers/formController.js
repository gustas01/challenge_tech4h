const { default: axios } = require('axios')
const salvarNaTabela = require('../tables/cidadeTabela')
const Cidade = require('../models/cidade')

exports.retornaDados = async (req, res) => {
    const {cityName} = req.body
    
    const cityNameComplete = cityName.split(' ').join('+')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameComplete}&appid=431742a70c1841a5f481a711fa373143`

    try{
        const weatherData = await axios.get(url)
        const response = weatherData.data
        await salvarNaTabela(response.name, response.sys.country, (response.main.temp - 273).toFixed(2), response.main.humidity, response.weather[0].description)
    }catch(err){
        console.log(err)
    }

  
    
    
    //para não salvar cidades repetidas no banco
    // try{
    //     const filtroNames = await Cidade.findAll({
    //         attributes: ['name']
    //     })
        
    //     const names = filtroNames.map(function (el) {return el.dataValues.name})
    //     const repeatedCities = filtroNames.filter((el) => el === req.body )

    //     if(repeatedCities) 
    //         Cidade.destroy({
    //             where: {
    //                 name: response.name
    //             }
    //         })
        
        
    // }catch(err){console.log(err)}

    



    const dadosFront = await Cidade.findAll({
        attributes: ['name', 'country', 'mainTemp', 'humidity', 'weather']
     })

    const dadosTratados = dadosFront.map(function(el) { return el.dataValues }).reverse()
    

    return res.send(dadosTratados)
}

