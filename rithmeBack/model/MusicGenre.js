const mongoose = require("mongoose");
const { Schema } = mongoose;

const MusicGenreSchema = new Schema({
  name: { type: String, unique: true }
});

module.exports = mongoose.model("MusicGenre", MusicGenreSchema);