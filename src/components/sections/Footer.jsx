import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
        <div className="container">
          <div className="footer-area">
            <div className="copy">&copy; StorAid, All rights reserved.</div>
            <div className="terms-policy">
              <Link to="/" className="footer-link"><img src="/icons/arrow-right.svg" /><span>Terms and Conditions</span></Link>
              <Link to="/" className="footer-link"><img src="/icons/arrow-right.svg" /><span>Privacy Policy</span></Link>
            </div>          
          </div>
        </div>
    </footer>
  )
}

export default Footer