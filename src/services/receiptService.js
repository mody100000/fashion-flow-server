const Receipt = require('../models/Receipt')

const createReceipt = async input => {
    const createdReceipt = await Receipt.create(input)
    return createdReceipt
}

module.exports = {
    createReceipt,
}
