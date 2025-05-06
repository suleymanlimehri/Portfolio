import Table from 'react-bootstrap/Table';
import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { AllremoveWishlist, removeFromWishlist} from '../../redux/features/WishlistSlice'

function Wishlist() {
  let { Allwishlist } = useSelector((state) => state.wishlist)
  let { allbasket } = useSelector((state) => state.basket)
  console.log(allbasket)
  const dispatch = useDispatch();
  return (
    <>
    <Table striped bordered hover style={{marginTop:"5rem"}}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Setting</th>
        </tr>
      </thead>
      <tbody>
        {
          Allwishlist.map((wishlist) => (
            <tr key={wishlist.id}>
              <td><img src={wishlist.image} alt="" width="100" /></td>
              <td>{wishlist.title}</td>
              <td>{wishlist.price}</td>
              <td>
                <Button variant="secondary" onClick={()=>dispatch(removeFromWishlist(wishlist.id))}>Remove</Button>
              </td>
              
            </tr>
          ))
          
        }
      </tbody>
    </Table>
    <button style={{border:"none",height:"40px",borderRadius:"5px",backgroundColor:"red",color:"white",padding:"10px"}}
    
    onClick={()=>dispatch(AllremoveWishlist())}>All Remove</button>
    </>
  );
}

export default Wishlist;