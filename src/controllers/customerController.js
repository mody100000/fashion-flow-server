const customerServies = require('../services/customerServies')
const errorHandler = require('../utils/errorHandler')
const validateCreateCustomerInput = require('../validation/createCustomer')

const createCustomer = async (req, res) => {
    try {
        const { success, error, value } = validateCreateCustomerInput(
            req.body
        ).validate()
        if (!success) throw error

        const newCustomer = await customerServies.createCustomer(value, res)
        res.status(201).json(newCustomer)
    } catch (err) {
        errorHandler({ ...err, resource: 'customer' }, res)
    }
}

const customers = async (req, res) => {
    const customers = await customerServies.getAllCustomers()
    res.json(customers)
}

const customer = async (req, res) => {
    const custId = req.params.id
    const customer = await customerServies.getCustomer(custId)
    if (!customer) return res.status(404).json({ msg: 'customer not found' })
    res.json(customer)
}

const deleteCustomer = async (req, res) => {
    const custId = req.params.id
    const deleteCustomer = await customerServies.deleteCustomer(custId)
    if (!deleteCustomer)
        return res.status(404).json({ msg: 'customer not found' })
    res.json(deleteCustomer)
}

module.exports = {
    createCustomer,
    customers,
    customer,
    deleteCustomer,
}
