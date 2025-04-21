import React from 'react'
import './Footer.css'
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    let icon={
        backgroundColor:"black",
        color:"white",
        borderRadius:"50%",
        width:"40px",
        height:"40px",
        padding:"8px"
    }
  return (
    <div className='footer-area'>
      <p>Copyright © Your Website 2023</p>
      <div className='icons-area'> 
        <FaTwitter style={icon} />
        <FaFacebookF style={icon} />
        <FaLinkedinIn style={icon}/>
      </div>
      <div className='link'>
        <a href="">Privacy Policy</a>
        <a href="">Terms of Use</a>
      </div>
    </div>
  )
}

export default Footer
