const userRouter = require('express').Router();
const userController = require('../controllers/userController')

userRouter.post('/register',userController.register)

module.exports =userRouter