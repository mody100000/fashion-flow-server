const Customer = require('../models/Customer')
const isValidObjectId = require('../utils/isValidObjectId')
const createCustomer = async input => {
    const createCustomer = await Customer.create(input)
    return createCustomer
}

const getAllCustomers = async () => {
    const customers = await Customer.find().sort('name')
    return customers
}

const getCustomer = async id => {
    if (!isValidObjectId(id)) return null
    const customer = await Customer.findById(id)
    if (!customer) return null
    return customer
}

const deleteCustomer = async id => {
    if (!isValidObjectId(id)) return null
    const deleteCustomer = await Customer.findByIdAndRemove(id)
    if (!deleteCustomer) return null
    return deleteCustomer
}

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomer,
    deleteCustomer,
}
