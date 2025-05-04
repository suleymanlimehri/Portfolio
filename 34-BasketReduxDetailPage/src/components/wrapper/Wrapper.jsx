import React from 'react'
import { FaHeart } from "react-icons/fa";
import { GrBasket } from "react-icons/gr";
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';

const Wrapper = () => {
  const { Allwishlist } = useSelector((state) => state.wishlist);
  const { allbasket } = useSelector((state) => state.basket);
  const baskets=allbasket.reduce((sum,basket)=>sum+basket.count,0)
  return (
    <div style={{display:"flex",gap:"25px"}}>
      <div>
        <Link  className='link' to="/wishlist">
        <FaHeart style={{cursor:"pointer",fontSize:"1.5rem"}}/>
        <sup>{Allwishlist.length}</sup>
        </Link>
      </div>
      <Link  className='link' to="/basket"><GrBasket size={25} style={{cursor:"pointer"}} />
      <sup>{baskets}</sup>
      </Link>
    </div>
  )
}

export default Wrapper

