import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import add_product_icon from '../../assets/addproduct.png'
import list_product_icon from '../../assets/listproduct.png'
import list_user_icon from '../../assets/listuser.png'
import list_checkout_icon from '../../assets/listcheckout.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" />
          <b><p>Add Product</p></b>
        </div>
      </Link>

      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" />
          <b><p>List Product</p></b>
        </div>
      </Link>

      <Link to={'/listuser'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
          <img src={list_user_icon} alt="" />
          <b><p>List User</p></b>
        </div>
      </Link>

      <Link to={'/allcheckouts'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
          <img src={list_checkout_icon} alt="" />
          <b><p>List Checkout</p></b>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar

