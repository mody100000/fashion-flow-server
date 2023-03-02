const {Router} = require("express")
const productController = require("../controllers/productController")


const router = Router();


router.post("/" , productController.createProduct)
// router.post("/me" , productController.me);
module.exports = router