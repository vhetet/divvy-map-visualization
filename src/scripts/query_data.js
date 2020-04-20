const request = require('request');
const fs = require('fs')

frequecy = {}

request({
    method: 'GET',
    url: "https://data.cityofchicago.org/resource/fg6s-gzvg.json?from_station_id=265"
}, (err, res, body) => {
    if (err) return console.error(err)
    fs.writeFileSync('src/assets/data/trips.json', body)
    // body = JSON.parse(body)
    // console.log(body.length)
    // console.log(body.slice(body.length - 2))
    // body.map(x => {
    //     frequecy[x.to_station_id] = frequecy[x.to_station_id] != undefined ? frequecy[x.to_station_id] + 1 : 0
    // })
    // console.log(frequecy)
})