import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from "../components/product/Product"
import { getProduct } from '../redux/features/ProductSlice'
const Home = () => {
  let {Allproduct}=useSelector(state=>state.products)
  let dispatch = useDispatch()


  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  return (
    <div className="d-flex flex-wrap justify-content-center " style={{gap:"15px",marginTop:"40px"}}>
      {
        Allproduct && Allproduct.map((item)=>(
         <Product key={item.id} product={item}/>
        ))
      }
    </div>
  )
}

export default Home
