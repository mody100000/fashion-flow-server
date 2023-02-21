const errorHandler = require("../utils/errorHandler")
const validateCreateCategoryInput = require("../validation/createCategory")
const categoryService = require("../services/categoryService")

const createCategory = async (req , res) => {
    const {success , error , value} = validateCreateCategoryInput(req.body).validate()
    if(! success) return errorHandler(error , res)

    return await categoryService.createCategory(value)
}

module.exports = {
    createCategory
}