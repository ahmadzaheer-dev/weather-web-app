const express = require('express')
const foreCast = require('../utils/forecast.js')
const geoCode = require('../utils/geocode.js')
const timeZone = require('../utils/timezone.js')
const path = require('path')
const hbs = require('hbs')
const partialPath = path.join(__dirname, '../templates/partials')
const viewsPath = path.join(__dirname, '../templates/views')
const publicPath = path.join(__dirname, '../public')


const app = express()
app.use(express.static(publicPath))
app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)
app.set('views', viewsPath)


app.get('', (req, res)=>{
    res.render('index', {})
})

app.get('/weather', (req, res) => {
    res.render('weather', {})
})

app.get('/weather-api', (req,res)=>{
    geoCode(req.query.location, (error, {latitude, longitude, location} = {}) => {        
        if(error){
            return res.send({error})
        } else{
            timeZone(latitude, longitude, (error, {timestamp, formatted}) =>{
                if(error){
                    return res.send({error})
                } else{
                    foreCast(latitude, longitude, (error, data) => {
                        if(error){
                            return res.send({error})
                        } else {
                            data.location = location
                            data.formatted = formatted
                            res.send(data)
                        }
                    })
                }
            })
        }
    }) 

})



const port = 3000;
app.listen(port, ()=>{

})