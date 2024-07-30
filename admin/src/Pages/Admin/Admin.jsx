import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import ListUser from '../../Components/ListUser/ListUser'
import ListCheckout from '../../Components/Checkout/Listcheckout'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/listproduct' element={<ListProduct/>}></Route>
        <Route path='/listuser' element={<ListUser/>}></Route>
        <Route path='/allcheckouts' element={<ListCheckout/>}></Route>
      </Routes>
    </div>
  )
}

export default Admin
