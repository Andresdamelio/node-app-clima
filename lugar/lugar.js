/* Paquete de node para realizar peticiones http, devuelven como
respuesta promesas, tambien se podria usar request, pero esta
devuelve callbacks */
const axios = require('axios');


/* Funcion que permite obtener la latitud y longitud de una
dirección (lugar) */
const getLugarLatLon = async ( direccion ) => {

    /* convirtiendo el argumento recibido a uno valido, el encodeURI
    permite convertir cualquier argumento que contenga espacios a un 
    argumento valido  */
    const encodeUrl = encodeURI( direccion );


    /* Se crea la instancia de axios que nos permitira hacer la petición a 
    la API de City Geo-Location Lookup, esta recibe unas cabeceras con un key*/

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key': '3007e59862msh8609639611d6d92p1cd71cjsnba8cf6f25f6f'}
    });


    /* Realizando la petición a la API a traves de la instacia de axios */
    const resp = await instance.get()


    /* Se verifica si la respuesta trae algún resultado, si no lo trae arroja un mensaje de 
    error */
    if( resp.data.Results.length === 0 ){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    /* En caso contrario, se obtiene el primer resultado de la 
    respuesta */
        
    const lugar = resp.data.Results[0];

    /* Utiizando destructuración se obtiene la direccion, 
    la longitud y la latitud */

    const { name: dir, lat, lon } = lugar;

    /* Se retorna un objeto con todo lo anterior */
    
    return { dir, lat, lon }
}

module.exports = {
    getLugarLatLon   
}