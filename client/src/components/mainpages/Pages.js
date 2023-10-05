import React, {useContext} from 'react';
import { Routes, Route } from 'react-router-dom'
import Products from './products/Products';
import OrderHistory from './history/orderHistory';
import OrderDetail from './history/OrderDetail';
import DetailProduct from './DetailProduct/DetailProduct';
import Cart from './cart/Cart';
import Register from './auth/Register';
import Login from './auth/Login';
import Category from './categories/Categories';
import CreateProduct from './createProduct/CreateProduct';
import NotFound from './utils/NotFound/NotFound';
import { GlobalState } from '../../GlobalState';
function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged;
    const [isAdmin] = state.userAPI.isAdmin;

    return (
        //update version 6 reacjs use Routes repalce Switch, element replace component
        <Routes>
            <Route path='/' exact element={<Products/>} />
            <Route path='/detail/:id' exact element={<DetailProduct />} />
            <Route path='/login' exact element={ isLogged? <NotFound/>: <Login />} />
            <Route path='/category' exact element={isAdmin?<Category/>: <NotFound/>} />
            <Route path='/create_product' exact element={isAdmin?<CreateProduct/>: <NotFound/>} />
            <Route path='/edit_product/:id' exact element={isAdmin?<CreateProduct/>: <NotFound/>} />

            
            <Route path='/register' exact element={isLogged? <NotFound/>:<Register />} />
            <Route path='/history' exact element={isLogged? <OrderHistory/>:<NotFound />} />
            <Route path='/history/:id' exact element={isLogged? <OrderDetail/>:<NotFound />} />

            <Route path='/cart' exact element={<Cart />} />
            <Route path='*' exact element={<NotFound />} />
        </Routes>
    )
}

export default Pages