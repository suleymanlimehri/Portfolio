import React from 'react'
import { FaHeart } from "react-icons/fa";
import { GrBasket } from "react-icons/gr";
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';

const Wrapper = () => {
  const { Allwishlist } = useSelector((state) => state.wishlist);
  return (
    <div style={{display:"flex",gap:"25px"}}>
      <div>
        <Link to="/wishlist"><FaHeart size={25} style={{position:"relative",cursor:"pointer"}}/></Link>
        <sup style={{fontSize:"20px",position:"absolute",top:"30px"}}>{Allwishlist.length}</sup>
      </div>
      <Link to="/basket"><GrBasket size={25} style={{cursor:"pointer"}} /></Link>
    </div>
  )
}

export default Wrapper

