var express = require("express");
var router = express.Router();
const axios = require('axios');
const Event = require("../model/Event");


/* Saving Events from TicketMaster API on MongoDB */
router.post('/events/seedDB', async (req, res) => {

  axios.get('https://app.ticketmaster.com/discovery/v2/events.json?size=200&classificationName=Music&countryCode=ES&apikey=ntGPVQaujf56CfGVAEXhDAioEwQA5Apr')
  .then( response => {
      
    const events = response.data['_embedded'].events;
    const eventsMongoDB = [];
     
      events.forEach( async event => {

      const newEvent = new Event({

        name: event.name,
        artist: {
                    name: event['_embedded'].attractions[0].name,
                    description: ''
                },
        dates: {
                  dateTime: event.dates.start.dateTime
                },
        genre: {
                    name: event.classifications[0].genre.name
                },
        priceRange: {
                        currency: 'Euro',
                        min: Math.floor(Math.random()*(50-20+1))+20,
                        max: Math.floor(Math.random()*(200-100+1))+100
                    },
        location: {
            name: event['_embedded'].venues[0].name,
            postalCode: event['_embedded'].venues[0].postalCode,
            city: event['_embedded'].venues[0].city.name,
            state: event['_embedded'].venues[0].state.name,
            country: {name: event['_embedded'].venues[0].country.name, countryCode: event['_embedded'].venues[0].country.countryCode},
            address: event['_embedded'].venues[0].address.line1,
            locationCoord: {longitude: event['_embedded'].venues[0].location.longitude, latitude: event['_embedded'].venues[0].location.latitude}
        },
        image: event.images[0].url,
        tickets: { sold: Math.floor(Math.random()*(20-0+1))+0, available: Math.floor(Math.random()*(200-20+1))+20}
      });

      await newEvent.save(function(err, newEvent) {
        eventsMongoDB.push(newEvent);
        if (err) return console.error(err);  
      });

      return Promise.resolve(console.log("Saved"));
      
    });

    res.send("OK");

  })
  .catch(error => {
    console.log(error);
  });

});

module.exports = router;