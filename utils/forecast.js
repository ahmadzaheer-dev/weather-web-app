const request = require('request')

const foreCast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/7513360991ee3b75ced2bb30745a7992/${lat},${long}`;
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to internet', undefined)
        } else if (body.error){
            callback('Unable to find location. Enter another address', undefined)
        } else {
            callback(undefined, {
                currently: {
                    icon: body.currently.icon,
                    temperature: body.currently.temperature,
                    humidity: body.currently.humidity,
                    pressure: body.currently.pressure,
                    windSpeed: body.currently.windSpeed,
                    cloudCover: body.currently.cloudCover,
                    uvIndex: body.currently.uvIndex,
                    visibility: body.currently.visibility,
                    summary: body.currently.summary
                },
                daily: [
                    {
                        icon: body.daily.data[0].icon,
                        tempHigh: body.daily.data[0].temperatureHigh,
                        tempLow: body.daily.data[0].temperatureLow,
                    },
                    {
                        icon: body.daily.data[1].icon,
                        tempHigh: body.daily.data[1].temperatureHigh,
                        tempLow: body.daily.data[1].temperatureLow,
                    },
                    {
                        icon: body.daily.data[2].icon,
                        tempHigh: body.daily.data[2].temperatureHigh,
                        tempLow: body.daily.data[2].temperatureLow,
                    },
                    {
                        icon: body.daily.data[3].icon,
                        tempHigh: body.daily.data[3].temperatureHigh,
                        tempLow: body.daily.data[3].temperatureLow,
                    },
                    {
                        icon: body.daily.data[4].icon,
                        tempHigh: body.daily.data[4].temperatureHigh,
                        tempLow: body.daily.data[4].temperatureLow,
                    },
                    {
                        icon: body.daily.data[5].icon,
                        tempHigh: body.daily.data[5].temperatureHigh,
                        tempLow: body.daily.data[5].temperatureLow,
                    },
                    {
                        icon: body.daily.data[6].icon,
                        tempHigh: body.daily.data[6].temperatureHigh,
                        tempLow: body.daily.data[6].temperatureLow,
                    }
                ]
            })
        }
    })
}

module.exports = foreCast