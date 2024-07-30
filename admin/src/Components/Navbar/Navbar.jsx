import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.png'
import profile from '../../assets/profile.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="" className='nav-logo' />
      <b><p>M Mobile Admin</p></b>
      <img src={profile} alt="" className='nav-profile' />
    </div>
  )
}

export default Navbar
