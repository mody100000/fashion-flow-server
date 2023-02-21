const errorHandler = require("../utils/errorHandler")
const validateCreateProductInput = require("../validation/createProduct")
const productService = require('../services/productService');

const createProduct = async (req , res) => {
    const {success , error , value} = validateCreateProductInput(req.body).validate()
    if(! success) return errorHandler(error , res)

    return await productService.createProduct(value , res)
}

module.exports = {
    createProduct
}