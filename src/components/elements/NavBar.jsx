import { Link, NavLink } from 'react-router-dom'
import Button from '@elements/Button'
import logotyp from '/logotyp.svg'

const NavBar = () => {
  return (
    <div id="nav-bar">        
            <div className="nav-menu">
              <Link to="/"><div className="logotyp"><img src={logotyp} alt="StorAid Storage Company logotyp" /></div></Link> 
            <nav className="nav-list">
                <NavLink className="menu-item" to="/">Home</NavLink>
                <NavLink className="menu-item" to="/about">About Us</NavLink> 
                <NavLink className="menu-item" to="/services">Services</NavLink> 
                <NavLink className="menu-item" to="/contact">Contact Us</NavLink>
            </nav>
            <Button name="Book Now" to="/booking" aria-label="Button to book a storeage."/>
            </div>
        </div>
    
  )
}

export default NavBar