const productRouter = require('express').Router();
const productController = require('../controllers/productController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
productRouter.route('/products')
    .get(productController.getProducts)
    .post(auth,authAdmin,productController.createProduct)

productRouter.route('/products/:id')
    .delete(auth,authAdmin,productController.deleteProduct)
    .put(auth,authAdmin,productController.updateProduct)

module.exports = productRouter