const { Schema, model } = require('mongoose')

const userSchema = new Schema({
 name: {
        type: String,
        required: true,
      },
 puesto: {
    type: [String],
    required: [false, "El campo es Requerido"] 
        },
 idPerson: {
    type: Number,
    required: true,
    minlength: [5, 'El nombre es muy corto, al menos 5'],
    maxlength: [5, 'El nombre es demasiado largo'],
  },
}, {
  timestamps: true,
})

const User = model('User', userSchema)


module.exports = User