const Joi = require("joi")

const validateLoginInput = (input) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(6).required(),
      })
    
      return schema.validate(input)
}

module.exports = validateLoginInput