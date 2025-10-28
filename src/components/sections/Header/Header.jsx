import React from 'react'
import './Header.css'

import TopBar from '../../elements/TopBar/TopBar'
import NavBar from '../../elements/NavBar/NavBar'

const Header = () => {
  return (
    <header>  
      <TopBar />
      <NavBar />   
    </header>
  )
}

export default Header