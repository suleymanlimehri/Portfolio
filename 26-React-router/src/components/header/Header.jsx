import React from 'react'
import style from './Header.module.css';
import Navbar from '../navbar/Navbar'
const Header = () => {
  return ( 
    <div className={` ${style.background}`}>
     <div className={`${style.container} `}>
      <Navbar/>
    </div> 
    </div>
    
  )
}

export default Header
