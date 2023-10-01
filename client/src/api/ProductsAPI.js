import { useEffect, useState } from 'react';
import axios from 'axios';
function ProductsAPI() {
    const [products,setProducts] = useState([])
    const [callback,setCallBack] = useState(false)
    useEffect(()=>{
        const getProducts = async()=>{
            const res = await axios.get('/api/products')
            setProducts(res.data.products)
            console.log({msg: res.data.products})
        }
        getProducts() 
    },[callback])
    return {
        products: [products,setProducts],
        callback: [callback,setCallBack]
    }
}

export default ProductsAPI