import React from 'react';
import BtnRender from './BtnRender';


function ProductItem({product,isAdmin,deleteProduct,handleCheck}) {
    
    console.log(product)
    return (
        <div className='product_card'>
            {isAdmin && <input type='checkbox' checked={product.checked} onChange={()=>{handleCheck(product._id)}}/>}
            <img src={product.images.secure_url} alt=''/>
            <div className="product-box">
            <h2>{product.title}</h2>
                <span>
                    ${product.price}
                </span>
                <p>{product.description}</p>
            </div>
            <BtnRender product={product} deleteProduct={deleteProduct}/>
        </div>
    )
    }

export default ProductItem