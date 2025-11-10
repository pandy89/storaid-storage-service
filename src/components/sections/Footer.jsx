import { Link } from "react-router-dom";
import arrow from '/icons/arrow-right.svg'

const Footer = () => {
  return (
    <footer id="footer">
        <div className="container">
          <div className="footer-area">
            <div className="copy">&copy; StorAid, All rights reserved.</div>
            <div className="terms-policy">
              <Link to="/notfound" className="footer-link"><img src={arrow} alt="right arrow to read Terms and Conditions" /><span>Terms and Conditions</span></Link>
              <Link to="/notfound" className="footer-link"><img src={arrow} alt="right arrow to read Privacy Policy" /><span>Privacy Policy</span></Link>
            </div>          
          </div>
        </div>
    </footer>
  )
}

export default Footer