const Product = require('../models/Product')
const isValidObjectId = require('../utils/isValidObjectId')

const createProduct = async (createProductInput, res) => {
    const createdProduct = await Product.create(createProductInput)
    return createdProduct
}

const getAllProducts = async () => {
    const products = await Product.find().sort('name')
    return products
}

const getProduct = async id => {
    if (!isValidObjectId(id)) return null
    const product = await Product.findById(id)
    if (!product) return null
    return product
}

const deleteProduct = async id => {
    if (!isValidObjectId(id)) return null
    const deleteProduct = await Product.findByIdAndRemove(id)
    if (!deleteProduct) return null
    return deleteProduct
}

module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    deleteProduct,
}
