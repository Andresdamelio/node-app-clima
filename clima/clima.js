
/* Consumo de api openweathermap que permite obtener el clima de una
dirección en especifico*/

const axios = require('axios');

const getClima = async (lat, lon) => {    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=c788c2e15f9a3bfcc8544f2ff8dc1373&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}