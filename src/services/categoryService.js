const Category = require('../models/Category')
const _ = require('lodash')
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
    
    const untilDate = moment().subtract(finalMonths, 'months')
    const cats =  await Category.find({
            createdAt: { $gte: untilDate },
    })

    const report = {}
      await Promise.all( _.range(finalMonths).map(async num => {
            const monthsAgo = finalMonths - num - 1
            const dueDate = moment().subtract(monthsAgo, 'months')
            
            report[dueDate.format("MMMM")] = []
            const monthReport = cats.filter(c => {
                return moment(c.createdAt).isSameOrBefore(dueDate)
            })
            report[dueDate.format("MMMM")].push(...monthReport)
        })
       )

       return report
}
module.exports = {
    createCategory,
    getAllCategories,
    getCategory,
    deleteCategory,
    categoryReport,
}
