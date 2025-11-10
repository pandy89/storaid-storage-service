import { Link } from 'react-router-dom'
import whitePhone from '/icons/phone.svg'
import whiteEmail from '/icons/email.svg'
import facebook from '/icons/facebook.svg'
import x from '/icons/x.svg'
import instagram from '/icons/instagram.svg'
import youtube from '/icons/youtube.svg'

const TopBar = () => {
  return (
    <div className="top-bar-area">        
        <div className="top-bar-content">
            <div className="top-bar-contact">
                <div className="top-bar-phone">
                    <img src={whitePhone} alt="Icon for phone" /><Link to="tel:+46812312244" className="top-bar-link">+46 8 123 122 44</Link>
                </div>
                <div className="top-bar-mail">
                    <img src={whiteEmail} alt="Icon for email" /><Link to="mailto:contact@domain.com" className="top-bar-link">contact@domain.com</Link>
                </div>
            </div>
            <div className="top-bar-sm">
                <Link to="https://www.facebook.com/"><img src={facebook} alt="Social media icon for Facebook" /></Link>
                <Link to="https://x.com/"><img src={x} alt="Social media icon for X (twitter)" /></Link>
                <Link to="https://www.instagram.com/"><img src={instagram} alt="Social media icon for Instagram" /></Link>
                <Link to="https://www.youtube.com/"><img src={youtube} alt="Social media icon for YouTube" /></Link>
            </div>
        </div>
    </div>    
  )
}

export default TopBar