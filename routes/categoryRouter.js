const categoryRouter = require('express').Router()
const categoryController = require('../controllers/categoryController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

categoryRouter.route('/category')
    .get(categoryController.getCategories)
    .post(auth,authAdmin,categoryController.createCategory)

categoryRouter.route('/category/:id')
    .delete(auth,authAdmin,categoryController.deleteCategory)
    .put(auth,authAdmin,categoryController.updateCategory)
module.exports = categoryRouter