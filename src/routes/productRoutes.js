const { Router } = require('express')
const productController = require('../controllers/productController')
const router = Router()

router.post('/', productController.createProduct)
router.get('/', productController.products)
router.get('/:id', productController.product)
router.delete('/:id', productController.deleteProduct)
module.exports = router
