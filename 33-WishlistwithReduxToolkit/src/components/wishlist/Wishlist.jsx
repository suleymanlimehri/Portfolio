import Table from 'react-bootstrap/Table';
import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { removeFromWishlist} from '../../redux/features/wishlist/WishlistSlice'

function Wishlist() {
  let { Allwishlist } = useSelector((state) => state.wishlist)
  const dispatch = useDispatch();
  return (
    <Table striped bordered hover>
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
              <td><img src={wishlist.image} alt="" width="50" /></td>
              <td>{wishlist.title}</td>
              <td>{wishlist.price}</td>
              <td>
                <Button variant="light" onClick={()=>dispatch(removeFromWishlist(wishlist.id))}>Remove</Button>
              </td>
            </tr>
          ))
          
        }
      </tbody>
    </Table>
  );
}

export default Wishlist;