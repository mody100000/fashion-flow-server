const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: false
  },
})

const customer = mongoose.model('Customer', CustomerSchema)
module.exports = customer
