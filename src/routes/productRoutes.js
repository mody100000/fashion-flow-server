const { Router } = require('express')
const productController = require('../controllers/productController')
const {
  getAllProducts,
  getProduct,
  deleteProduct,
} = require('../services/productService')

const router = Router()

router.post('/', productController.createProduct)
router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.delete('/:id', deleteProduct)
module.exports = router
