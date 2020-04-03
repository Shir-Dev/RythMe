const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfileSchema = new Schema({
  username: { 
              type: String, 
              unique: [true,'Nombre de usuario no disponible'],
              required: [true, 'Campo requerido']
            },
  name: {
          type: String,
          required: [true, 'Campo requerido']
        },
  surname: {
              type: String,
              required: [true, 'Campo requerido']
            },
  zipCode: {
              type: Number,
              required: [true, 'Campo requerido'],        
              validate: {
                validator: function(v) {
                  return /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/i.test(v);
                },
                message: props => `${props.value} no es un zipCode válido`
              },
            },
  birthDay: {
              type: Date,
              required: [true, 'Campo requerido'],
            },
  musicalInterest: [{ type: String }],
  eventsId: [{ type: String }],
  urlImage: String
});

module.exports = mongoose.model("Profile", ProfileSchema);
