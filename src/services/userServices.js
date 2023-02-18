const UserModel = require('../models/user')

const findUserById = async id => {
  const user = await UserModel.findById(id)
  if (!user) return null
  return user
}

module.exports = {
  findUserById,
}
