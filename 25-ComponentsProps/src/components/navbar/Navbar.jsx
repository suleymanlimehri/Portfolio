import React from 'react'
import Logo from '../logo/Logo'
import Navlist from '../navlist/Navlist'
import './Navbar.css'
const Navbar = () => {
  return (
      <div className='container navbar'>
      <Logo />
      <Navlist />
    </div>

  )
}

export default Navbar
