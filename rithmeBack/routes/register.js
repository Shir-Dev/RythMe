var express = require("express");
var router = express.Router();
const pool = require("../mysql/database");
const bcrypt = require("bcrypt");
/* GET home page. */
router.post("/", async (req, res) => {
  const newUser = {
    userName: req.body.userName,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10)
  };

  console.log(req.body.userName, req.body.email, req.body.password);
  const newProfile = new Profile({
    // userName: req.body.userName,
    // name: req.body.name,
    // surname: req.body.surname,
    // zipCode: req.body.zipCode,
    // birthDay: req.body.birthDay,
    // musicalInterest: req.body.musicalInterest,
    // eventsId: req.body.eventsId
  });

  await newProfile.save(function(err, newProfile) {
    if (err) return console.error(err);
    res.status(201).json(newProfile);
  });
  const users = await pool.query("INSERT INTO Login set ? ", [newUser]);
  //FALTA POR HACER METER AQUÍ EN MONGO

  res.redirect("/login");
});

module.exports = router;
