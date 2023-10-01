import React,{useContext, useEffect, useState} from 'react';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {  PayPalButtons } from "@paypal/react-paypal-js";
import paymentButton from "./paymentButton"
function Cart() {
    const state = useContext(GlobalState)
    const [cart,setCart]= state.userAPI.cart;
    const [total, setTotal]= useState(0)
    const [token] = state.token
    useEffect(()=>{
        const getTotal = ()=>{
            const total = cart.reduce((prev, item)=>{
                return prev+ (item.price * item.quantity)
            },0)
            setTotal(total)
        }
        getTotal()
    },[cart])

    const addToCart = async()=>{
        await axios.patch('/user/addcart',{cart},{
            headers: {Authorization: token}
        })
    }

    if(cart.length === 0){
        return <h2 style={{textAlign: "center", fontStyle: "4rem"}}>Giỏ hàng rỗng!</h2>
    }
    const increment =(id)=>{
        cart.forEach(item => {
            if(item._id === id) 
            item.quantity +=1;
        });
        setCart([...cart]);
        addToCart()
    }
    const decrement =(id)=>{
        cart.forEach(item => {
            if(item._id === id) 
            item.quantity ===1?  item.quantity=1: item.quantity -=1;
        });
        setCart([...cart]);
        addToCart()
    }
    const removeCart = (id)=>{
        if(window.confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ?")){
            cart.forEach((item, index)=> {
                if(item._id === id)
                    cart.splice(index, 1);
            });
            setCart([...cart])
        }
        addToCart()
    }

    const tranSuccess = async ()=>{
        let payment ={
            paymentID: "paymentID",
            address: "Thử nghiệm"
        }
         console.log(payment)
         const {paymentID, address} = payment
         await axios.post('/api/payment',{cart,paymentID, address},{headers: {Authorization: token}})
        setCart([])
        addToCart([])
        alert("You are successfully an order")

    }

    return (
        
        <div>

            {
                cart.map((product)=>{
                    return (
                        <div className='detail cart' key={product._id}>
                        <img src={product.images.secure_url} alt="" />
                        <div className="box-detail">
                            <div className="row">
                                <h2>{product.title}</h2>
                                <h6>{product.product_id}</h6>

                            </div>
                            <span>${product.price}</span>
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            
                            <div className="amount">
                                <button onClick={()=>{decrement(product._id)}}>
                                    -
                                </button>
                                <span>{product.quantity}</span>
                                <button onClick={()=>{increment(product._id)}}>
                                    +
                                </button>
                            </div>
                            
                            <div className="delete" onClick={()=>{removeCart(product._id)}}>
                                X
                            </div>
                        </div>  

                    </div>
                    )

                })
            }
            <div className="total">
                <h3>Total: $ {total}</h3>
                <button className="payment-button" total={total} onClick={()=>{tranSuccess()}} style={{background: 'orange', width: 100,height: 50}}>Thanh Toán</button>
                <PayPalButtons style={{color: 'blue'}} total={total} tranSuccess={tranSuccess} className='paymentButton'/>
            </div>
        </div>
    )
}

export default Cart