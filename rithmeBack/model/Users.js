const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    userName: String,
    name: String,
    surname: String,
    email: String,
    password: String,
    zipCode: Number,
    birthDay: Date,
    musicalInterstId: String,
    eventsId: String
  },
  { collection: "Users" }
);

UserSchema.methods.getName = function() {
  console.log(this.name);
};
const User = mongoose.model("Users", UserSchema);

module.exports = User;
