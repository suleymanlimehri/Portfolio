import React from 'react'
import Navbar from "../navbar/Navbar"
const Header = () => {
  return (
    <div style={{padding:"8px 0",backgroundColor:"purple",color:"white",position:"fixed",top:0,left:0,width:"100%",zIndex:"1"}}>
      <Navbar/>
    </div>
  )
}

export default Header
