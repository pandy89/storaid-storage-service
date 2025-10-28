import React from 'react'
import './TopBar.css'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className="navigation-bar">
        <div className="container">
        <div className="top-bar">
            <div className="nav-contact">
                <div className="nav-contact-phone">
                    <img src="public/icons/phone.svg" /><Link to="tel:+46812312244" className="topbar-link">+46 8 123 122 44</Link>
                </div>
                <div className="nav-contact-mail">
                    <img src="public/icons/email.svg" /><Link to="mailto:contact@domain.com" className="topbar-link">contact@domain.com</Link>
                </div>
            </div>
            <div className="nav-socialmedia">
                <Link to="/"><img src="/public/icons/facebook.svg" /></Link>
                <Link to="/"><img src="/public/icons/x.svg" /></Link>
                <Link to="/"><img src="/public/icons/instagram.svg" /></Link>
                <Link to="/"><img src="/public/icons/youtube.svg" /></Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TopBar