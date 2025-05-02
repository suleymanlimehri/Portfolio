import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/features/product/ProductSlice'
import Product from '../components/product/Product'
const Home = () => {
  let { Allproduct } = useSelector((state) => state.products)
  let {Allwishlist} = useSelector((state) => state.wishlist)
  let dispatch = useDispatch()


  console.log(Allwishlist)
  console.log(Allproduct)
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  return (
    <div className="d-flex flex-wrap justify-content-center">
        {
            Allproduct.map((item) => (
              <Product
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              />
            ))          
        }
    </div>
  )
}

export default Home
