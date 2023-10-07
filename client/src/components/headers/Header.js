import React,{useState,useContext} from 'react';
import { GlobalState } from '../../GlobalState';
import { Link } from 'react-router-dom'
import Cart from './icons/cart.svg';
import Close from './icons/close.svg'
import Menu from './icons/menu.svg'
import axios from 'axios';
function Header(){
    const state = useContext(GlobalState)
    //console.log(state)
    const [isLogged] = state.userAPI.isLogged;
    const [isAdmin] = state.userAPI.isAdmin;
    const [cart] = state.userAPI.cart;
    const [menu,setMenu] = useState(false)
    const logoutUser = async()=>{
        await axios.get('/user/logout')
        localStorage.clear();
        window.location.href= "/"
        
    }
    const adminRouter = ()=>{
        return (
            <>
               <li onClick={()=>{setMenu(!menu)}}><Link to="/create_product">Create Product</Link></li> 
                <li onClick={()=>{setMenu(!menu)}}><Link to="/category">Categories</Link></li>
            </>
        )
    }
    const loggedRouter = ()=>{
        return (
            <>
                <li onClick={()=>{setMenu(!menu)}}><Link to="/history">History</Link></li>
                <li onClick={()=>{setMenu(!menu)}}><Link to="/" onClick={logoutUser}>Log out</Link></li>
            </>
        )
    }
    
    const styleMenu ={
        left: menu? 0: "-100%"
    }
    return (
        
        <header>
            <div className='menu' onClick={()=>{setMenu(!menu)}}>
                <img src={Menu} alt='' width="30" />
            </div>
            <div className='logo'>
                <h1>
                    <Link to='/'>{isAdmin? "Admin": "DL Shop"}</Link>
                </h1>
            </div>
            <ul style={styleMenu}>
                <li onClick={()=>{setMenu(!menu)}}><Link to='/'>{isAdmin? "Product": "Shop"}</Link></li>
                {isAdmin && adminRouter()}
                {isLogged ?loggedRouter():<li><Link to='/login'>Login - Register</Link></li>}
                
                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

                
            </ul>
            {isAdmin ? "":
                <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to='/cart'>
                    <img src={Cart} alt='' width="30" />
                </Link>
                </div>
            
            }
            
        </header>
    )
}

export default Header