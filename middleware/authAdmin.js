const jwt =require('jsonwebtoken')
const User = require('../models/userModel');

const authAdmin = async(req,res,next)=>{
    try {
        
        const user = await User.findOne({_id: req.user.id})
        if(user.role ==0 ) res.status(400).json({msg: "Admin resource access denied!"})
        next();        
    }
     catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


module.exports= authAdmin