const request = require('request')

const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYWhtYWQtemFoZWVyIiwiYSI6ImNrN3RnbXhsczB5N3MzbG91bTR6dGs4dTYifQ.RXbf02FZn6kzVd5s0wcVuA&limit=1`
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('The app was not able to search location', undefined)
        } else if (body.features.length === 0){
            callback('Unable to find location. Try another one', undefined)
        } else {
            callback(undefined, { 
                longitude: body.features[0].center[0], 
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geoCode