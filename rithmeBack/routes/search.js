var express = require("express");
var router = express.Router();
const Event = require("../model/Event");

/* Filtered Cities on MongoDB */
router.get('/search/filteredCities', async (req, res) => {
    
    const filteredCities = await Event.distinct( "location.city");
  
    res.status(201).json(filteredCities);
  
});

module.exports = router;