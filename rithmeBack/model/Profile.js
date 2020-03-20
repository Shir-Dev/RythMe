const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfileSchema = new Schema(
  {
    userName: {type: String, unique: true},
    name: String,
    surname: String,
    zipCode: Number,
    birthDay: Date,
    musicalInterest: [{type: String}],
    eventsId: [{type: String}]
  }
);

module.exports = mongoose.model('Profile', ProfileSchema);
