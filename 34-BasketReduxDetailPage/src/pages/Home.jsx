import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/features/product/ProductSlice'
import Product from '../components/product/Product'
const Home = () => {
  let { Allproduct } = useSelector((state) => state.products)
  let dispatch = useDispatch()


  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  return (
    <div className="d-flex flex-wrap justify-content-center " style={{gap:"10px",marginTop:"40px"}}>
        {
            Allproduct.map((item) => (
              <Product
              key={item.id}
              product={item}
              />
            ))          
        }
    </div>
  )
}

export default Home
