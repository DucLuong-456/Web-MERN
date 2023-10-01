const Payment = require('../models/paymentModel')
const Users = require('../models/userModel')
const Products =require('../models/productModel')


const paymentController ={
    getPayments: async( req,res)=>{
        try {
            const payments = await Payment.find({})
            res.json(payments) 
        } catch (err) {
            res.status(500).json({msg: err.message})
        }
    },
    createPayment: async( req,res)=>{
        try {
            const user  = await Users.findById(req.user.id).select('name email')    
            if(!user) return res.status(400).json({msg: "User does not exist!"})
            const {cart, paymentID, address} = req.body;
            
            const {_id, name, email} = user;
            const newPayment = new Payment({
                user_id:_id,name, email, cart,paymentID,address
            })

            cart.filter( item =>{
                return sold(item._id,item.quantity,item.sold)
            })

            await newPayment.save();
            res.json({msg: 'payment success!'})
            
        } catch (err) {
            res.status(500).json({msg: err.message})
        }
    }

}

const sold =(id,quantity,oldSold)=>{
    return Products.findByIdAndUpdate({_id: id},{sold: quantity+ oldSold})
}

module.exports = paymentController