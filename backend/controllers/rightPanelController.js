const Cidade = require('../models/cidade')

exports.recentlySearchedCitiesDatas = async (req, res) => {
    const dadosFront = await Cidade.findAll({
        attributes: ['name', 'country', 'mainTemp', 'humidity', 'weather']
     })

    const dadosTratados = dadosFront.map(function(el) { return el.dataValues }).reverse()

    return res.send(dadosTratados)
}


exports.popularCitiesData = async (req, res) => {
    const [count, rows] = await Cidade.findAndCountAll({

    })

    console.log('count = ', count, 'rows = ', rows)
}