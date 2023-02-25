const Product = require('../models/Product')

const createProduct = async (createProductInput, res) => {
  const createdProduct = await Product.create(createProductInput)
  return createdProduct
}

const getAllProducts = async (req, res) => {
  const product = await Product.find().sort('name')
  res.send(product)
}

const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) return res.status(404).send('product not found')
  res.send(product)
}

const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id)
  if (!product) return res.status(404).send('invalid id')
  res.send(product)
}

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
}
