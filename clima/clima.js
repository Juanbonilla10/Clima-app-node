const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=99fdabc324298d252051660c82c1bca9&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}