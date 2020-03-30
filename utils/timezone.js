const request = require('request')

const timezone = (lat, long, callback) =>{
    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=K9EZYLU8VB52&format=json&by=position&lat=${lat}&lng=${long}`

    request({url, json: true}, (error, response) =>{
        if(error){
            callback('Unable to connect to internet', undefined)
        } else if(response.body.status === 'FAILED'){
            callback('Unable to determine timezone', undefined)
        } else {
            callback(undefined, {
                formatted: response.body.formatted
            })
        }    
    })
}

module.exports = timezone