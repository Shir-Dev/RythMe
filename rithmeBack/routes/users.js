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
const nodemailer = require("nodemailer");
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
  // console.log(req.body.username, req.body.email, req.body.password);
  // console.log(req.file.path);

  let user = await pool.query("SELECT * from Login WHERE  email = ? ", [
    req.body.email,
  ]);
  user = user[0];

  // Validations
  if (user) return res.status(403).json({ error: "Correo ya existe" });
  if (!req.file)
    return res.status(403).json({ error: "La imgen es requerida" });
  if (
    !req.body.username ||
    req.body.username.length < 3 ||
    req.body.username.length > 11
  ) {
    return res
      .status(403)
      .json({ error: "El username debe tener entre 3 y 11 caracteres" });
  }
  if (!req.body.name || req.body.name.length < 3 || req.body.name.length > 15) {
    return res
      .status(403)
      .json({ error: "El username debe tener entre 3 y 15 caracteres" });
  }
  if (
    !req.body.surname ||
    req.body.surname.length < 3 ||
    req.body.surname.length > 20 ||
    /^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$/.test(req.body.surname) == false
  ) {
    return res.status(403).json({
      error: "El apellido debe tener entre 3 y 11 caracteres y solo letras",
    });
  }
  if (
    !req.body.email ||
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      req.body.email
    ) == false
  ) {
    return res.status(403).json({ error: "Email inválido" });
  }
  if (
    !req.body.password ||
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})+$/.test(req.body.password)
  ) {
    return res.status(403).json({ error: "Contraseña inválida. Debe contener al menos 1 letra mayúscula, 1 letra minúscula y 1 número. Y debe tener mínimo 8 caracteres." });
  }

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

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.sendStatus(200);
});
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
router.post("/forgotpass", async (req, res) => {
  const forgotPass = await pool.query("SELECT * FROM Login WHERE  email = ? ", [
    req.body.email,
  ]);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rithmeupgradehub@gmail.com",
      pass: "jymgibfewoqkllyd",
    },
  });

  console.log("Este es el id", forgotPass[0].userID);
  console.log(req.body.email);
  if (!forgotPass[0]) {
    console.log("No hay email");
    return res.sendStatus(406);
  } else {
    const createdToken = JWT.sign(
      {
        iss: "RithMeOk",
        sub: forgotPass[0].userID,
        expiresIn: 600,
      },
      "pepino"
    );
    console.log("el token es este" + createdToken);
    const mailOptions = {
      from: "rithmeupgrade@gmail.com", // sender address
      to: req.body.email, // list of receivers
      subject: "Restablecer contraseña", // Subject line
      html: `<p>Para cambiar la contraseña pulsa <a href="http://localhost:3000/recoverPass/?token=${createdToken}">AQUÍ</a></p>`, // plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    return res.sendStatus(200);
  }
});
router.post("/recoverpass", async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 10);
  const iD = req.body.iD;
  const recoverPass = await pool.query(
    "UPDATE Login SET password = ? WHERE userID = ?",
    [password, iD]
  );
  console.log("soy el recover:" + recoverPass);
  res.status(200);
});

router.post(
  "/validateToken",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
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
