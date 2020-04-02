const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfileSchema = new Schema({
  username: { 
              type: String, 
              unique: [true,'Nombre de usuario no disponible'],
              required: [true, 'Campo requerido'],
              minLength: [3, 'Mínimo 3 caracteres'],
              maxLength: [11, 'Máximo 11 caracteres'],
            },
  name: {
          type: String,
          required: [true, 'Campo requerido'],
          minLength: [3, 'Mínimo 3 caracteres'],
          maxLength: [11, 'Máximo 11 caracteres'],
         
        },
  surname: {
              type: String,
              required: [true, 'Campo requerido'],
              minLength: [3, 'Mínimo 3 caracteres'],
              validate: {
                validator: function(v) {
                  return /^[A-Za-z ]+$/i.test(v);
                },
                message: props => `${props.value} no es un apellido válido`
              },
            },
  zipCode: {
              type: Number,
              required: [true, 'Campo requerido'],
              minLength: [5, 'El zipCode debe tener 5 caracteres'],
              maxLength: [5, 'El zipCode debe tener 5 caracteres'],         
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
              min: ['2003-12-31','Debe ser mayor de edad'],
              max: ['1919-12-31', 'Supera máxima edad permitida']
            },
  musicalInterest: [{ type: String }],
  eventsId: [{ type: String }],
  urlImage: String
});

module.exports = mongoose.model("Profile", ProfileSchema);