const mongoose = require('mongoose')
const { PRODUCT_SIZES } = require('../constant')

const ReceiptSchema = new mongoose.Schema({
    number: {
        type: Number,
        unique: true,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            size: {
                type: String,
                enum: PRODUCT_SIZES,
            },
            discount: {
                type: Number,
                default: 0,
            },
        },
    ],
})
ReceiptSchema.methods.calculateTotalPrice = () => {
    // const check = this;
}
const receipt = mongoose.model('Receipt', ReceiptSchema)
module.exports = receipt
