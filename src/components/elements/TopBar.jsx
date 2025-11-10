import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className="top-bar-area">        
        <div className="top-bar-content">
            <div className="top-bar-contact">
                <div className="top-bar-phone">
                    <img src="/icons/phone.svg" alt="Icon for phone" /><Link to="tel:+46812312244" className="top-bar-link">+46 8 123 122 44</Link>
                </div>
                <div className="top-bar-mail">
                    <img src="/icons/email.svg" alt="Icon for email" /><Link to="mailto:contact@domain.com" className="top-bar-link">contact@domain.com</Link>
                </div>
            </div>
            <div className="top-bar-sm">
                <Link to="https://www.facebook.com/"><img src="/icons/facebook.svg" alt="Social media icon for Facebook" /></Link>
                <Link to="https://x.com/"><img src="/icons/x.svg" alt="Social media icon for X (twitter)" /></Link>
                <Link to="https://www.instagram.com/"><img src="/icons/instagram.svg" alt="Social media icon for Instagram" /></Link>
                <Link to="https://www.youtube.com/"><img src="/icons/youtube.svg" alt="Social media icon for YouTube" /></Link>
            </div>
        </div>
    </div>    
  )
}

export default TopBar