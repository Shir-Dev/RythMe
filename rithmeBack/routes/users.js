const JWT = require("jsonwebtoken");
var express = require("express");
var router = express.Router();
const Profile = require("../model/Profile");
const passportConfig = require("../Passport/passport.config");
const passport = require("passport");
const bcrypt = require("bcrypt");
const pool = require("../mysql/database");
const multer = require("multer");
const Event = require("../model/Event");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./userPhotos/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({ storage });
//funcion para hacer token
const signToken = (profileId) =>
  JWT.sign(
    {
      iss: "RithMeOk",
      sub: profileId,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    "pepino"
  );

router.post("/signup", upload.single("userPhoto"), async function (
  req,
  res,
  next
) {
  console.log(req.body.username, req.body.email, req.body.password);
  console.log(req.file.path);
  // ESTO VA A MONGO
  const newProfile = new Profile({
    username: req.body.username,
    name: req.body.name,
    surname: req.body.surname,
    zipCode: req.body.zipCode,
    birthDay: req.body.birthDay,
    musicalInterest: req.body.musicalInterest,
    urlImage: "http://localhost:3333/" + req.file.path,
    eventsId: [],
  });
  console.log(newProfile.id);
  await newProfile.save(function (err, newProfile) {
    if (err) return console.error(err);
    // res.status(201).json(newProfile);
  });

  //ESTO VA A MYSQL
  const newUser = {
    userID: newProfile.id,
    username: req.body.username,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
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

router.get(
  "/checktoken",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    console.log("a ver ");
    console.log("asdflkjas");
    console.log(req.user);
    res.status(200).json(req.user);
  }
);
router.post("/events", async (req, res) => {
  console.log("el body es" + req.body.eventsId);

  const event = await Event.find({
    _id: { $in: req.body.eventsId },
  });
  res.status(200).json(event);
});

router.get("/", async (req, res) => {
  const profile = await Profile.findById("5e7c7964a071e524f42419c8");
  res.status(200).json(profile);
});
module.exports = router;
