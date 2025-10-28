import React from 'react'
import './Header.css'
import Button from '@elements/Button/Button'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
         <header>        
          <div id="navigation-bar">
              <div className="container">
                <div className="top-bar">
                    <div className="nav-contact">
                        <div className="nav-contact-phone">
                            <img src="public/icons/phone.svg" /><a href="#">+46 8 123 122 44</a>
                        </div>
                        <div className="nav-contact-mail">
                            <img src="public/icons/email.svg" /><a href="#">contact@domain.com</a>
                        </div>
                    </div>
                    <div className="nav-socialmedia">
                        <a href="#"><img src="/public/icons/facebook.svg" /></a>
                        <a href="#"><img src="/public/icons/x.svg" /></a>
                        <a href="#"><img src="/public/icons/instagram.svg" /></a>
                        <a href="#"><img src="/public/icons/youtube.svg" /></a>
                    </div>
                </div>
              </div>
          </div>
          <nav id="nav-bar">
            <div className="container">
              <div className="menu">
                  <Link to="/">
                    <div className="logotyp"><img src="/public/logotyp.svg" /></div>
                  </Link>
                  <ul className="menu-list">
                      <li className="menu-item"><a href="#">Home</a></li>
                      <NavLink className="menu-item" to="/about">About Us</NavLink> 
                      <li className="menu-item"><a href="#">Services</a></li> 
                      <li className="menu-item"><a href="#">Contact Us</a></li> 
                      <li className="menu-item"><a href="#">Booking</a></li>                   
                  </ul>
                  <Button name="Book now" />              
              </div>       
            </div>
          </nav>
        </header>
    </>
  )
}

export default Header