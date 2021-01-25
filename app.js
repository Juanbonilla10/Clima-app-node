const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el climea',
        demand: true
    }
}).argv;

/*lugar.getLugarLatLng(argv.direccion)
    .then(console.log)
    .catch(err => {
        throw new Error(`Error al consultar data ${err}`);
    });


clima.getClima(5.32233, -73.4891)
    .then(console.log)
    .catch(console.log);*/

const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.long);
        return `El clima de ${coord.direccion} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);