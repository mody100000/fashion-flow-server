const receiptService = require('../services/receiptService')
const errorHandler = require('../utils/errorHandler')
const validateCreateReceiptInput = require('../validation/createReceipt')

const createReceipt = async (req, res) => {
    try {
        const { success, error, value } = validateCreateReceiptInput(
            req.body
        ).validate()
        if (!success) throw error

        const newReceipt = await receiptService.createReceipt(value, res)
        res.status(201).json(newReceipt)
    } catch (err) {
        errorHandler({ ...err, resource: 'receipt' }, res)
    }
}
module.exports = {
    createReceipt,
}
