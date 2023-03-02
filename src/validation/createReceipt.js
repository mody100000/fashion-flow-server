const Joi = require('joi')
const BaseValidator = require('./BaseValidator')
const { PRODUCT_SIZES } = require('../constant')

const schema = Joi.object({
    number: Joi.number().required(),
    customer: Joi.string().required(),
    products: Joi.array().items({
        product: Joi.string().required(),
        label: Joi.string()
            .required()
            .valid(...PRODUCT_SIZES)
            .label('size label'),
        stock: Joi.number().default(0),
    }),
})

const validateCreateReceiptInput = input => new BaseValidator(schema, input)
module.exports = validateCreateReceiptInput
