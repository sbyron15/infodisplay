'use strict';
const ForecastIO = require('forecast-io')
const forecast = new ForecastIO('878cba08d7d0e9f649aab3debcdab3b9')
 
forecast
    .latitude('37.8267')
    .longitude('-122.423')
    .units('ca')
    .get()
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    });
