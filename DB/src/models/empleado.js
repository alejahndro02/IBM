const mongoose = require('mongoose')

const { Schema } = mongoose

const empleadoSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 5
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 5
  },
  vacationDay:{
    type:String,
  }
})

module.exports = {
  model: mongoose.model('empleado', empleadoSchema),
  schema: empleadoSchema
}

