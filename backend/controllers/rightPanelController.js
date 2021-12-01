const { sequelize } = require('../models/cidade')
const Cidade = require('../models/cidade')

exports.recentlySearchedCitiesDatas = async (req, res) => {
    const dadosFront = await Cidade.findAll({
        attributes: ['name', 'country', 'mainTemp', 'humidity', 'weather']
     })

    const repeatedData = dadosFront.map(function(el) { return el.dataValues.name }).reverse()

    const dadosTratados = [... new Set(repeatedData)] //eliminando renderização de repetições no frontend
    return res.send(dadosTratados.slice(0, 5)) //retornando um array de cityNames
}


exports.popularCitiesData = async (req, res) => {
    
    try{
        const citiesData = await Cidade.findAll({
            attributes: [
                'name',
                [sequelize.fn('COUNT', sequelize.col('name')), 'occurrences'],
            ],
            group: ['name'],
        })
        
        
        const orderedCitiesData = citiesData.sort((a, b) => a.dataValues.occurrences - b.dataValues.occurrences).reverse()
        
        const mostPopularCities = orderedCitiesData.map(el => el.dataValues)
        
        
    return res.send(mostPopularCities.slice(0, 5)) //retornando um objeto {name: 'cityName', occurrencies: numberOfOccurrences}
    }
    catch(err){console.log(err)}
}