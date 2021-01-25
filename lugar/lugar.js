const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyDBXQZ_uVpDgxcmi3lxHv38BhVFSo8-wsc`,
        timeout: 1000,
        params: { 'key': 'AIzaSyDBXQZ_uVpDgxcmi3lxHv38BhVFSo8-wsc' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.results.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = respuesta.data.results[0].geometry.location;
    const direccion = respuesta.data.results[0].address_components[0].long_name;
    const lat = data.lat;
    const long = data.lng;

    return {
        direccion,
        lat,
        long
    }

}

module.exports = {
    getLugarLatLng
}