const Category = require('../models/Category')
const isValidObjectId = require('../utils/isValidObjectId')

const createCategory = async input => {
    const createdCategory = await Category.create(input)
    return createdCategory
}

const getAllCategories = async () => {
    const categories = await Category.find().sort('name')
    return categories
}

const getCategory = async id => {
    if (!isValidObjectId(id)) return null
    const category = await Category.findById(id)
    if (!category) return null
    return category
}

const deleteCategory = async id => {
    if (!isValidObjectId(id)) return null
    const deletedCategory = await Category.findByIdAndRemove(id)
    if (!deletedCategory) return null
    return deletedCategory
}
module.exports = {
    createCategory,
    getAllCategories,
    getCategory,
    deleteCategory,
}
