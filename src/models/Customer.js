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
})

const customer = mongoose.model('Customer', CustomerSchema)
module.exports = customer
