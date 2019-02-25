//importo el módulo axios para realizar peticiones get
const axios = require('axios');
//creo una función aplicando async para retornar una promesa
const getClima = async(lat, lng) => {
        //guardamos lo que retorne el axios en resp
        let resp = await axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8fe6db5842ca7016f8277730af945f1e`)

        //almacenamos en cada variable los datos pertinentes del json
        let temperatura = resp.data.main.temp
        let temp_min = resp.data.main.temp_min
        let temp_max = resp.data.main.temp_max

        //retorno un objeto
        return {
            temperatura,
            temp_min,
            temp_max
        }
    }
    //exporto la función
module.exports = {
    getClima
}