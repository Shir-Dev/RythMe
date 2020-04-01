var express = require("express");
var router = express.Router();
const Profile = require("../model/Profile");

// /* Pag principal de registro */
// router.get("/", function(req, res, next) {
//   // Necesito la ruta del registro de usuarios
//   res.send("respond with a resource - Register");
// });

/* Saving a New Profile on MongoDB */
router.post("/profiles", async (req, res) => {
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
});

/* Finding a Profile by ID on MongoDB */
router.get("/profiles/:id", async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  res.status(200).json(profile);
});

/* Finding and Updating a Profile by ID on MongoDB */
router.put("/profiles/edit/", async (req, res) => {
  const {
    idUser,
    userName,
    name,
    surname,
    zipCode,
    birthDay,
    musicalInterest,
    eventsId
  } = req.body;
  let profile = await Profile.findByIdAndUpdate(idUser, {
    userName,
    name,
    surname,
    zipCode,
    birthDay,
    musicalInterest,
    eventsId
  });
  res.status(200).json(profile);
});

/* Deleting a Profile by ID on MongoDB */
router.delete("/profiles/delete/:id", async (req, res) => {
  await Profile.findByIdAndDelete(req.params.id);
  console.log("Profile deleted successfully");
  res.redirect("/");
});

module.exports = router;
