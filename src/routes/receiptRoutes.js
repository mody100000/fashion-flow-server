const { Router } = require('express')
const router = Router()
const receiptController = require('../controllers/receiptController')

router.post('/', receiptController.createReceipt)
router.get('/', receiptController.receipts)
router.get('/:id', receiptController.receipt)
router.delete('/:id', receiptController.deleteReceipt)
module.exports = router
