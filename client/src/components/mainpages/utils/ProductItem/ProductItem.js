import React from 'react';
import {Link} from 'react-router-dom'
import BtnRender from './BtnRender';
function ProductItem({product,isAdmin}) {
    console.log(product)
    return (
        <div className='product_card'>
            {isAdmin && <input type='checkbox' defaultChecked={product.checked}/>}
            <img src={product.images.secure_url}/>
            <div className="product-box">
            <h2>{product.title}</h2>
                <span>
                    ${product.price}
                </span>
                <p>{product.description}</p>
            </div>
            <BtnRender product={product}/>
        </div>
    )
}

export default ProductItem