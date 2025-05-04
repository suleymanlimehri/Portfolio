import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { wishlistfunc } from '../../redux/features/wishlist/WishlistSlice'
import { addbasket } from '../../redux/features/basketSlice';
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from "react-toastify"

function Product({ product }) {
  const { Allwishlist } = useSelector((state) => state.wishlist);
  const isInWishlist = Allwishlist.find(item => item.id === product.id);
  const dispatch = useDispatch();
  let navigate = useNavigate()
  
  
  return (
    <div style={{ marginTop: "45px", display: 'flex', gap: "40px" }}>
      <Card style={{ width: '16rem', minHeight: '350px' }} className="shadow-sm" 
      onClick={()=>{
        toast.dark("welcome to detailspage")
        setTimeout(()=>{
          navigate(`detailpage/${product.id}`)
        },1000)
      }}
      >
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
        />
        <Card.Body>
          <Card.Title style={{ fontSize: '1rem', minHeight: '3em' }}>{product.title.slice(0, 40)}</Card.Title>
          <Card.Text className="fw-bold">${product.price}</Card.Text>
          <Button variant="primary" className="w-100" onClick={(e) => {
            e.stopPropagation(),
              dispatch(addbasket(product))
              toast.dark("add to basket")
          }}>Add to Basket</Button>
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
        >
          {isInWishlist ? <FaHeart onClick={(e) => {
            e.stopPropagation(),
             toast.dark("remove to wishlist")
              setTimeout(() => {
                dispatch(wishlistfunc(product))
              }, 1000);
              
              
          }
          } /> : <FaRegHeart onClick={(e) => {
            e.stopPropagation(),
              toast.dark("add to wishlist")
              dispatch(wishlistfunc(product))
              
          }} />}
        </div>
        <ToastContainer autoClose={1000} hideProgressBar={false}/>
      </Card>
    </div>
  );
}

export default Product;




