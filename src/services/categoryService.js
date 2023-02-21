const Category = require('../models/Category')

const createCategory = async (input, res) => {
  const createdCategory = await Category.create(input)
  return res.status(201).json(createdCategory)
}

module.exports = {
  createCategory,
}