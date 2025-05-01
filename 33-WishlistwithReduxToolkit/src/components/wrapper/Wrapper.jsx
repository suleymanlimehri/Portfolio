import React from 'react'
import { FaHeart } from "react-icons/fa";
import { GrBasket } from "react-icons/gr";

const Wrapper = () => {
  return (
    <div style={{display:"flex",gap:"25px"}}>
      <div>
        <FaHeart size={25} style={{position:"relative",cursor:"pointer"}}/>
        <sup style={{fontSize:"20px",position:"absolute",top:"25px"}}>0</sup>
      </div>
      <GrBasket size={25}/>
    </div>
  )
}

export default Wrapper

