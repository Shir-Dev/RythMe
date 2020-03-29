const JWT = require("jsonwebtoken");
var express = require("express");
var router = express.Router();
const Profile = require("../model/Profile");
const passport = require("passport");
const passportConfig = require("../Passport/passport.config");
const bcrypt = require("bcrypt");
const pool = require("../mysql/database");

//funcion para hacer token
const signToken = profileId =>
  JWT.sign(
    {
      iss: "RithMeOk",
      sub: profileId,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1)
    },
    "pepino"
  );

router.post("/signup", async function(req, res, next) {
  console.log(req.body.username, req.body.email, req.body.password);
  // ESTO VA A MONGO
  const newProfile = new Profile({
    username: req.body.username,
    name: req.body.name,
    surname: req.body.surname,
    zipCode: req.body.zipCode,
    birthDay: req.body.birthDay,
    musicalInterest: req.body.musicalInterest
    // eventsId: req.body.eventsId
  });
  console.log(newProfile.id);
  await newProfile.save(function(err, newProfile) {
    if (err) return console.error(err);
    // res.status(201).json(newProfile);
  });

  //ESTO VA A MYSQL
  const newUser = {
    userID: newProfile.id,
    username: req.body.username,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10)
  };
  const users = await pool.query("INSERT INTO Login set ? ", [newUser]);

  const token = signToken(newProfile.id);

  res.cookie("token", token, { httpOnly: true }).sendStatus(200);
});

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  (req, res, next) => {
    const token = signToken(req.user.userID);
    console.log("login successfull, the user is ", req.user.userID);
    res.cookie("token", token, { httpOnly: true }).sendStatus(200);
  }
);

router.post(
  "/checktoken",
  passport.authenticate("jwt", { session: false }),
  () => {
    console.log("He entrado con el token");
  }
);

router.get("/", async (req, res) => {
  const profile = await Profile.findById("5e7c7964a071e524f42419c8");
  res.status(200).json(profile);
});
module.exports = router;
