const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const userController = {
    register: async(req,res)=>{
        try {
            const {name,email, password }= req.body;
            const user = await User.findOne({email})
            if(user) return res.status(400).json({msg: "Email đã tồn tại!"})
            if(password.length <6) return res.status(400).json({msg: "Mật khẩu dài ít nhất 6 ký tự"})
            const passwordHash = await bcrypt.hash(password,10)
            const newUser = new User({
                name, email,password: passwordHash
            })
            await newUser.save();
            res.json({msg: "register Sucess!"});
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }
}

module.exports = userController