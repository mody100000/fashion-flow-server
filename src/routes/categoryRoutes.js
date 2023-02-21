const {Router} = require("express")
const categoryController = require("../controllers/categoryController")


const router = Router();


router.post("/" , categoryController.createCategory)

module.exports = router