const errorHandler = require('../utils/errorHandler')
const {
  checkUserLogin,
  generateUserToken,
} = require('../services/userServices')
// const ErrorResponse = require('../utils/ErrorResponse')
const validateLoginInput = require('../validation/login')

const login = async (req, res) => {
  const { error, value } = validateLoginInput(req.body)
  if (error) return errorHandler({...error, from : "joi"} , res)

  // no errors
  const { username, password } = value

  const user = await checkUserLogin(username, password)
  if (user.error) return errorHandler(user.error , res)
  // user is logged in successfully

  const accessToken = await generateUserToken(user)

  res.status(200).json({
    success: true,
    accessToken,
  })
}

module.exports = { login }
