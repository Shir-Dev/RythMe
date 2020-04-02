var express = require("express");
var router = express.Router();
const axios = require('axios');
const Event = require("../model/Event");


/* Saving Events from TicketMaster API on MongoDB */
router.post('/events/seedDB', async (req, res) => {

  axios.get('https://app.ticketmaster.com/discovery/v2/events.json?size=200&segment=Music&countryCode=ES&apikey=ntGPVQaujf56CfGVAEXhDAioEwQA5Apr')
  .then( async response => {
      
    const events = response.data['_embedded'].events;
    
    for await (event of events){
  
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
                    id: "",
                    name: event.classifications[0].genre.name
                },
        subGenre: {
                    name: event.classifications[0].subGenre.name
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
        if (err) return console.error(err);  
      });
      
    };
  
    res.send("Saved - OK");

  })
  .catch(error => {
    console.log(error);
  });
});

/* Events on MongoDB */
router.get('/events/all', async (req, res) => {
  const events = await Events.find();
  res.status(200).json(events);
});

/* Filtered Events on MongoDB */
router.get('/events', async (req, res) => {
    
  const uniqueEvents = await Event.distinct( "artist.name");
  let filteredEvents = [];

  for await (artistFilter of uniqueEvents){

    filteredEvents.push(await Event.findOne({"artist.name": artistFilter}, {}));

  };

  res.status(201).json(filteredEvents);

});

/* Filtered Cities from MongoDB */
router.get('/events/search/filteredCities', async (req, res) => {
    
  const filteredCities = await Event.distinct( "location.city");

  res.status(201).json(filteredCities);

});

/* Filter by Query on MongoDB */
router.get('/events/search', async (req, res) => {
  let searchParam = req.query;
  console.log(searchParam);

  let searchObject = {};

  if (searchParam.name !== undefined && searchParam.name !== ''){
      searchObject['artist.name'] = searchParam.name;
  }
  if (searchParam.genre !== undefined && searchParam.genre !== ''){
      searchObject['genre.name'] = searchParam.genre;
  }
  if (searchParam.city !== undefined && searchParam.city !== ''){
      searchObject['location.city'] = searchParam.city;
  }

  console.log(searchObject);
  const events = await Event.find(searchObject);

  res.status(200).json(events);
});

module.exports = router;