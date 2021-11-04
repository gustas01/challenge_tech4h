const { default: axios } = require('axios')

exports.retornaDados = (req, res) => {
    // const cityName = req.body.cityName
    // const url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=431742a70c1841a5f481a711fa373143`
    // axios.get(url)
    //     .then((response) => res.send(response))
    //     .catch((err) => console.log(err))
   return res.send({"mensagem": "Requisição POST recebidaaass"})
}
