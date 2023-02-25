const { Router } = require('express')
const categoryController = require('../controllers/categoryController')

const router = Router()

router.post('/', categoryController.createCategory)
router.get('/', categoryController.categories)
router.get('/:id', categoryController.category)
router.delete('/:id', categoryController.deleteCategory)
module.exports = router
