var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const User = require("../model/Users");
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});
router.post("/", function(req, res, next) {
  mongoose.connect(
    "mongodb+srv://ejemplo:ejemplo@rithme-dvoaw.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));

  db.once("open", function() {
    var user = new User({
      userName: "miguel17693",
      name: "miguel",
      surname: "Fernández",
      email: "miguel@miguel.com",
      password: "pass1234",
      zipCode: "28012",
      birthDay: 17 / 06 / 1993,
      musicalInterstId: "asdlñkfjñasldkfj",
      eventsId: "asldkfasdf"
    });
    user.save(function(err, user) {
      if (err) return console.error(err);
      console.log(user);
    });
    res.send("respond with a resource");
  });
});

module.exports = router;
