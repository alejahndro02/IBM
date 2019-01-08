const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
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
  model: mongoose.model('user', userSchema),
  schema: userSchema
}