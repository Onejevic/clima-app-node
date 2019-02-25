//importo el módulo para realizar peticiones
const axios = require('axios');
//utilizo una función con async para que retorne una promesa
const getLugarLatLng = async(direccion) => {
        //codifico el texto en formato URI
        let encodedUrl = encodeURI(direccion)
            //Concateno con la url y la api key brindada por google
        let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBgnZzW_ak3V-qdWYfWTdAuq2k1CFlP_9k`)
            //si hay un zero_results retorna un error
        if (resp.data.status === 'ZERO_RESULTS') {
            throw new Error(`No hay resultados para la ciudad ${direccion}`)
        }
        //almacenamos en cada variable los datos del json
        let location = resp.data.results[0].formatted_address;
        let lat = resp.data.results[0].geometry.location.lat;
        let lng = resp.data.results[0].geometry.location.lng;
        //retornamos un objeto
        return {
            direccion: location,
            lat,
            lng
        }
    }
    //exportamos la función
module.exports = {
    getLugarLatLng
}