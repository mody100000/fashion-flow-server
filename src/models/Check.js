const mongoose = require('mongoose')

const CheckSchema = new mongoose.Schema({
  number: {
    type: Number,
    unique: true,
    required: true,
  },
  customerName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  productName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  price: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  size: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  discount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  total: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0 || value > 100) {
        throw new Error("disscount can't be less than 0 or greater than 100")
      }
    },
  },
})

const check = mongoose.model('Check', CheckSchema)
module.exports = check
