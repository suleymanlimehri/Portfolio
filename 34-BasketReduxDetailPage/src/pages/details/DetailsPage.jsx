import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addbasket, decrement, increment } from '../../redux/features/basketSlice'

import { ToastContainer, toast } from 'react-toastify';
import "../details/Detailspage.css"

const DetailsPage = () => {
  const { allbasket } = useSelector((state) => state.basket);

  console.log(allbasket)
  const {Allproduct}=useSelector((state)=>state.products)
  let { id } = useParams()

  let detailpageCount=allbasket.find((item)=>item.id==id)
  let count=detailpageCount ? detailpageCount.count:0

  let findProduct = Allproduct.find((product) => product.id == id)

  
  
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: "45px" }}>
    <div className='details'>
      <div >
        <img src={findProduct.image} alt="" className='detailimg'/>
      </div>
      <div style={{ width: "400px" }}>
        <h2>{findProduct.title}</h2>
        <p>{findProduct.description}</p>

        <div className='dectBtn'>
          <button
            style={{ width: "40px", height: "40px", border: "none", borderRadius: "5px" ,backgroundColor:"#C8A2C8", color:"white"}}
            onClick={() =>{
              dispatch(decrement(findProduct))
              toast.success(`${count } count decrement successfuly`)
            } 
            }
            disabled={count == 1}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className='Btn'
            onClick={() => {
               dispatch(increment(findProduct))
              toast.success(`${count } count increment successfuly`)
            }
            }
    
          >
            +
          </button>
        </div>

        <button onClick={() => {
          dispatch(addbasket(findProduct))
           toast.success(`${count } count add to cart successfuly`)
        }}   className='cart'>
          Add to Cart
        </button>
      </div>
    </div>
    <ToastContainer/>
  </div>
  
  )
}

export default DetailsPage
