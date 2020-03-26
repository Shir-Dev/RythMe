var express = require("express");
var router = express.Router();
const MusicGenres = require("../model/MusicGenre");

router.post('/musicGenres', async (req, res) => {

    const genres = new MusicGenres({
        name: req.body.name
    });

    await genres.save(function(err, genres) {
      if (err) return console.error(err);
        res.status(201).json(genres);
    });
});

/* Music Genres on MongoDB */
router.get('/musicGenres', async (req, res) => {
    const genres = await MusicGenres.find();
    res.status(200).json(genres);
});

module.exports = router;