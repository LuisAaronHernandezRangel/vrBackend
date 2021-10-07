const router = require('express').Router()
const userController = require('../controllers/user.controller')

// Create
router.route('/').post(userController.create) // /users/
// Read
router.route('/').get(userController.list) // /users/
//router.route("/").get(userController.showAll);
module.exports = router