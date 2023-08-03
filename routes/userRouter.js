const userRouter = require('express').Router();
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')

userRouter.post('/register',userController.register)
userRouter.post('/login',userController.login)
userRouter.get('/logout',userController.logout)
userRouter.get('/infor',auth,userController.getUser)
userRouter.get('/refreshToken',userController.refreshToken)
userRouter.patch('/addcart',auth,userController.addCart)


module.exports =userRouter