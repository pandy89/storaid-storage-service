import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Button from '@elements/Button'

const NavBar = () => {
  return (
    <div id="nav-bar">
        <div className="container">
            <div className="nav-menu">
            <Link to="/"><div className="logotyp"><img src="/logotyp.svg" alt="StorAid Storage Company logotyp" /></div></Link> 
            <nav className="nav-list">
                <NavLink className="menu-item" to="/">Home</NavLink>
                <NavLink className="menu-item" to="/about">About Us</NavLink> 
                <NavLink className="menu-item" to="/services">Services</NavLink> 
                <NavLink className="menu-item" to="/contact">Contact Us</NavLink> 
                <NavLink className="menu-item" to="/booking">Booking</NavLink>
            </nav>
                <Button name="Book now" aria-label="Button to book a demo." />
            </div>
        </div>
    </div>
  )
}

export default NavBar