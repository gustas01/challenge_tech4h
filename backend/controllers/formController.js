const { default: axios } = require('axios')

exports.retornaDados = (req, res) => {
    const {cityName} = req.body
    
    const cityNameComplete = cityName.split(' ').join('+')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameComplete}&appid=431742a70c1841a5f481a711fa373143`

    axios.get(url)
        .then(response => res.send(response.data))
        .catch((err) => console.log(err))
}
