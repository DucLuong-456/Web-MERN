require('dotenv').config()
const express= require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload= require('express-fileupload')
const cookieParser =require('cookie-parser')
const db = require('./dbConfig')


const app =express();
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))
//Connect to mongoDB
db.connect();
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))


 
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server run on http://localhost:${PORT}`);
})