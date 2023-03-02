const Receipt = require('../models/Receipt')
const isValidObjectId = require('../utils/isValidObjectId')

const createReceipt = async input => {
    const createdReceipt = await Receipt.create(input)
    return createdReceipt
}

const getAllReceipts = async () => {
    const receipts = await Receipt.find().sort('name')
    return receipts
}

const getReceipt = async id => {
    if (!isValidObjectId(id)) return null
    const receipt = await Receipt.findById(id)
    if (!receipt) return null
    return receipt
}

const deleteReceipt = async id => {
    if (!isValidObjectId(id)) return null
    const deleteReceipt = await Receipt.findByIdAndRemove(id)
    if (!deleteReceipt) return null
    return deleteReceipt
}

module.exports = {
    createReceipt,
    getAllReceipts,
    getReceipt,
    deleteReceipt,
}
