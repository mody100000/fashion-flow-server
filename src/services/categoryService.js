const Category = require('../models/Category')
const _ = require('lodash')
const errorHandler = require('../utils/errorHandler')
const isValidObjectId = require('../utils/isValidObjectId')
const moment = require('moment')

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
const categoryReport = async options => {
    const finalMonths = options.monthsBefore || 5
    // TODO: think about caching this

    return await Promise.all(
        _.range(finalMonths).map(async num => {
            const date = moment().subtract(finalMonths - num - 1, 'months')
            const categories = await Category.find({
                createdAt: { $lte: date },
            })
            console.log(categories)
            return categories
        })
    )
}
module.exports = {
    createCategory,
    getAllCategories,
    getCategory,
    deleteCategory,
    categoryReport,
}
