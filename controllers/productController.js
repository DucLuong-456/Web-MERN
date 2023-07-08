const Product = require('../models/productModel')


const productController = {
    getProducts: async(req,res)=>{
        try {
            const products = await Product.find()
            if(!products) res.status(400).json({msg: "Do not products!"})
            res.json(products)
        } catch (error) {
            return res.status(500).json({msg: error.message})
            
        }
    },
    createProduct: async(req,res)=>{
        try {
            const {product_id,title, price,description,content,images,category} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            const product = await Product.findOne({product_id})
            if(product)
                return res.status(400).json({msg: "this product is already exists!"})

            const newProduct = new Product({
                product_id,title: title.toLowerCase(), price,description,content,images,category
            })

            await newProduct.save();
            res.json({msg: "Created a product!"})
        } catch (error) {
            return res.status(500).json({msg: error.message})
            
        }
    },
    deleteProduct: async(req,res)=>{
        try {
            await Product.findByIdAndDelete(req.params.id)
            res.json({msg: "Delete a product!"})
        } catch (error) {
            return res.status(500).json({msg: error.message})
            
        }
    },
    updateProduct: async(req,res)=>{
        try {
            const {title, price,description,content,images,category} = req.body;
            if(!images) res.status(400).json({msg: "No image upload!"})

            await Product.findByIdAndUpdate({_id: req.params.id},{
                title: title.toLowerCase(), price,description,content,images,category
            })
            
            res.json({msg: "Updated a product!"})
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
}

module.exports = productController
