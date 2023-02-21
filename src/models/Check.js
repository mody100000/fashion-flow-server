const mongoose = require('mongoose')
const { PRODUCT_SIZES } = require('../constant')

const CheckSchema = new mongoose.Schema({
  number: {
    type: Number,
    unique: true,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  products: 
  [
    {
      product : {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
      size: {
        type: String,
        enum : PRODUCT_SIZES
      },
      discount: {
        type: Number,
        default : 0
      },
    }
],
})
CheckSchema.methods.calculateTotalPrice = () => {
  // const check = this;
}
const check = mongoose.model('Check', CheckSchema)
module.exports = check
