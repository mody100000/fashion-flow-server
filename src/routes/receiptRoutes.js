const { Router } = require('express')
const router = Router()
const receiptController = require('../controllers/receiptController')

router.post('/', receiptController.createReceipt)
module.exports = router
