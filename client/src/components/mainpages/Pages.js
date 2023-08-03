import React, {useContext} from 'react';
import { Routes, Route } from 'react-router-dom'
import Products from './products/Products';
import ProductItem from './utils/ProductItem/ProductItem';
import DetailProduct from './DetailProduct/DetailProduct';
import Cart from './cart/Cart';
import Register from './auth/Register';
import Login from './auth/Login';
import NotFound from './utils/NotFound/NotFound';
import { GlobalState } from '../../GlobalState';
function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged;
    return (
        //update version 6 reacjs use Routes repalce Switch, element replace component
        <Routes>
            <Route path='/' exact element={<Products/>} />
            <Route path='/detail/:id' exact element={<DetailProduct />} />
            <Route path='/login' exact element={ isLogged? <NotFound/>: <Login />} />
            <Route path='/register' exact element={isLogged? <NotFound/>:<Register />} />
            <Route path='/cart' exact element={<Cart />} />
            <Route path='*' exact element={<NotFound />} />
        </Routes>
    )
}

export default Pages