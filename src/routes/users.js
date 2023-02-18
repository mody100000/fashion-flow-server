const {Router} = require("express")
const userController = require("../controllers/users")


const router = Router();


// login
router.post("/login" , userController.login)

module.exports = router