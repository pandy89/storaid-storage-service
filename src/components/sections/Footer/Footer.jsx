import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer-area">
            <div className="copy">&copy; StorAid, All rights reserved.</div>
            <div className="terms-policy">
              <Link to="/" className="footer-link"><img src="public/icons/arrow-right.svg" /><span>Terms and Conditions</span></Link>
              <Link to="/" className="footer-link"><img src="public/icons/arrow-right.svg" /><span>Privacy Policy</span></Link>
            </div>          
          </div>
        </div>
    </footer>
  )
}

export default Footer