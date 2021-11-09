const { sequelize } = require('../models/cidade')
const Cidade = require('../models/cidade')

exports.recentlySearchedCitiesDatas = async (req, res) => {
    const dadosFront = await Cidade.findAll({
        attributes: ['name', 'country', 'mainTemp', 'humidity', 'weather']
     })

    const repeatedData = dadosFront.map(function(el) { return el.dataValues.name }).reverse()

    const dadosTratados = [... new Set(repeatedData)] //eliminando renderização de repetições no frontend

    return res.send(dadosTratados)
}


exports.popularCitiesData = async (req, res) => {
    const mostPopularCities = await Cidade.findAll({
    //    attributes: [
    //        'name', [
    //            sequelize.fn('COUNT', sequelize.col('name'), 'names')
    //        ]
    //    ],
    //    group: 'names',
    //    order: ['names', 'DESC'],
    //    limit: 3
        // order: [
        //     sequelize.fn('COUNT', sequelize.col('name'))
        // ],
        // limit:3,

    })

    console.log('sequelize = ', sequelize)
    console.log('Cidade = ', Cidade)
    console.log('mostPopularCities' , mostPopularCities)
    
    return res.send(mostPopularCities)
}