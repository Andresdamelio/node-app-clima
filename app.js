

/* Exportando el argv de yarg que nos permite obtener el
argumento por consola. */
const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


/* lugar.getLugarLatLon( argv.direccion )
    .then( resp => {
        console.log(resp);
    })
    .catch( err => {
        console.log(e);
    })
 */
    /* clima.getClima(9.070000, -63.509998)
            .then( resp => {
                console.log(resp);
            })
            .catch(err => {
                console.log(err);
            }) */

const getInfo = async ( direccion ) => {

    try {
        const coords = await lugar.getLugarLatLon(direccion)

        const temp = await clima.getClima(coords.lat, coords.lon);

        return `El clima de ${ coords.dir } es de ${ temp }.`;
    } catch (error) {
        return `No se pudo obtener el clima de ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then( resp => {
        console.log(resp)
    })
    .catch( err => {
        console.log(err)
    })