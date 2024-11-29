import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER </p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="fopter-social-icon">
        <div className="fotter-icon-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="fotter-icon-container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="fotter-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>

      </div>
      <div className="footerCopy-right">
        <hr />
        <p>Copyright @ 2024 - All right reserved </p>
      </div>
    </div>
  )
}

export default Footer
