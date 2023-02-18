const joi = require('joi')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { TOKEN_LIFETIME } = require('../config/constants')

const login = async (req, res, next) => {
  const schema = joi.object({
    username: joi.string().required(),
    password: joi.string().min(6).required(),
  })

  const { error, value } = schema.validate(req.body)

  if (error) return next({ ...error, from: 'joi' })

  // no errors
  const { username, password } = value

  const user = await User.findOne({ username })
  if (!user) return next(new Error('username or password is incorrect'))

  // TODO: check for email verification
  // check for password
  bcrypt.compare(password, user.password, async (err, same) => {
    if (!same) return next(new Error('username or password is incorrect'))

    // user is logged in successfully

    const parsedUser = user.toJSON()
    delete parsedUser.password
    const accessToken = jwt.sign(parsedUser, process.env.TOKEN_KEY, {
      expiresIn: TOKEN_LIFETIME,
    })

    res.status(200).json({
      success: true,
      accessToken,
    })
  })
}

module.exports = { login }
