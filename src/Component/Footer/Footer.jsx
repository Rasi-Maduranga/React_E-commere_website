import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import facebook from '../Assets/facebook.png'
import whatsapp from '../Assets/whatsapp.png'
import intagram from '../Assets/intagram.png'
import pinterest from '../Assets/printerest.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>M MOBILE</p>
        </div>
        <ul className='footer-link'>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icon-container">
            <img src={facebook} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={whatsapp} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={intagram} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={pinterest} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2024 - All Right Reserved.</p>
          <p>@Maduwa</p>
        </div>
    </div>
  )
}

export default Footer
