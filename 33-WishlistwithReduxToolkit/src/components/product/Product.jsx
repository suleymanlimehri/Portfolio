import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; 
import { wishlistfunc } from '../../redux/features/wishlist/WishlistSlice'
function Product({ id,image, title, price }) {
  const { Allwishlist } = useSelector((state) => state.wishlist);
  const isInWishlist = Allwishlist.some(item => item.id === id);
  const dispatch = useDispatch();
  return (
    <div className="m-3">
      <Card style={{ width: '18rem', minHeight: '350px' }} className="shadow-sm">
        <Card.Img
          variant="top"
          src={image}
          style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
        />
        <Card.Body>
          <Card.Title style={{ fontSize: '1rem', minHeight: '3em' }}>{title.slice(0, 40)}</Card.Title>
          <Card.Text className="fw-bold">${price}</Card.Text>
          <Button variant="primary" className="w-100">Add to Cart</Button>
        </Card.Body>
        <div
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: 'red'
          }}
          onClick={() => dispatch(wishlistfunc({ id, image, title, price }))}
        >
          {isInWishlist ? <FaHeart /> : <FaRegHeart />}
        </div>
      </Card>
    </div>
  );
}

export default Product;




