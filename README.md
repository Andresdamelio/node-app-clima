
## Aplicación de clima

Esta es una aplicación de comandos que te permite saber el clima de una ciudad de cualquier parte del mundo, la temperatura es expresada en celsius.

Se hace uso de dos API

- rapidapi (City Geo-Location Lookup)

    Con esta API podemos obtener diversos datos de un lugar en especifico, en el proyecto es usada para obtener la latitud y longitud de la dirección que se indique, esta información sera usada para obtener la temperatura haciendo uso de la API de openweathermap, especificamente, Current weather data.

    Enlace: https://rapidapi.com/dev132/api/city-geo-location-lookup

- openweathermap

    La API es usada para obtener la temperatura con los datos obtenidos de la API anterior, de aquí se obtienen una serie de datos, sin embargo se muestra solo la tempratura, ya que es el fin de la aplicación de comandos.

    Enlace: https://openweathermap.org

## Uso

Ejecuta en primer lugar el comando

```
npm install
```
con esto, puedes usarla ejecutado el siguiente comando

```
node app -d "lugar" o 
node app --direccion "lugar"
```

## Ejemplo

```
node app -d "Madrid" o 
node app --direccion "Madrid"
```