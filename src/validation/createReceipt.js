const Joi = require('joi')
const BaseValidator = require('./BaseValidator')
const { PRODUCT_SIZES } = require('../constant')

const schema = Joi.object({
    number: Joi.string().required(),
    customer: Joi.string().required(),
    products: Joi.array()
        .required()
        .min(1)
        .items({
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

/**
 *
 * orders : status => pending , on the way , recieved , declined   ( feature )
 *
 * crud category front - crud product , crud customers , crud receipts
 *
 *
 *
 *
 */
