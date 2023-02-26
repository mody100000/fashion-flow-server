const errorHandler = require('../utils/errorHandler')
const validateCreateProductInput = require('../validation/createProduct')
const productService = require('../services/productService')

const createProduct = async (req, res) => {
  const { success, error, value } = validateCreateProductInput(
    req.body
  ).validate()
  if (!success) return errorHandler(error, res)

  const newProduct = await productService.createProduct(value)
  res.status(201).json(newProduct)
}

module.exports = {
  createProduct,
}
