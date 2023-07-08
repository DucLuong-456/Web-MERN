const productRouter = require('express').Router();
const productController = require('../controllers/productController')
productRouter.route('/products')
    .get(productController.getProducts)
    .post(productController.createProduct)

productRouter.route('/products/:id')
    .delete(productController.deleteProduct)
    .put(productController.updateProduct)

module.exports = productRouter