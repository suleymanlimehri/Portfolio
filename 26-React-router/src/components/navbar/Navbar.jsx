import React from 'react'
import style from './Navbar.module.css';
import Navlist from '../navlist/NavList'
import Logo from '../logo/Logo'
const Navbar = () => {
    return (
        <div className={style.navbar}>
            <Logo />
            <Navlist />
        </div>

    )
}

export default Navbar
