import React from 'react'
import {Link } from 'react-router-dom'
const Navlist = () => {
  return (
    <ul style={{display:'flex',gap:20}}>
      <li><Link className='link' to="/admin">Admin</Link></li>
      <li><Link className='link' to="/">Home</Link></li>
      <li><Link className='link' to="/about" >About</Link></li>
      <li><Link className='link' to="/contact">Contact</Link></li>
    </ul>
  )
}

export default Navlist
