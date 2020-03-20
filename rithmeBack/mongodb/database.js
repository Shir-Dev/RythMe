const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect(
    "mongodb+srv://ejemplo:ejemplo@rithme-dvoaw.mongodb.net/test?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
)
    .then( db => console.log('MongoDB is connected'))
    .catch( err => console.log(err));

module.exports = db;

