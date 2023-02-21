const Product = require("../models/Product")

const createProduct = async (createProductInput , res) => {
    const createdProduct = await Product.create(createProductInput)
    return res.json(createdProduct)
}



module.exports = {
createProduct
}