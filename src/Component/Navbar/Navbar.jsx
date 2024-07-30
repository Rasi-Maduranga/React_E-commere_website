import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'> Shop </Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("abouts")}}><Link style={{textDecoration: 'none'}} to='/abouts'>About </Link>{menu==="abouts"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contacts")}}><Link style={{textDecoration: 'none'}} to='/contacts'>Contact </Link>{menu==="contacts"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>}
            
            <div className="cart">
                <Link style={{textDecoration: 'none'}} to='/cart'><IoCartOutline /></Link>
            </div>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
