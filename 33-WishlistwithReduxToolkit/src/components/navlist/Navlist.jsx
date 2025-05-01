import React from 'react'
import {Link } from 'react-router-dom'
const Navlist = () => {
  return (
    <ul style={{display:'flex',gap:20}}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about" >About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  )
}

export default Navlist
