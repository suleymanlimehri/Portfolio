import Table from 'react-bootstrap/Table';
import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import "./Basket.css"
import { AllremoveBasket, decrement, increment, removeBasket } from '../../redux/features/basketSlice';
function Basket() {
  const { allbasket } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  console.log(allbasket)
let total=allbasket.reduce((sum,product)=>sum+product.count*product.price,0)
  return (
    <>
    <Table  striped bordered hover style={{marginTop:"5rem"}}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Count</th>
          <th>Setting</th>
        </tr>
      </thead>
      <tbody>
        {
          allbasket.map((Basket) => (
            <tr key={Basket.id}>
              <td><img src={Basket.image} alt="" width="0" /></td>
              <td>{Basket.title}</td>
              <td>{(Basket.price* Basket.count).toFixed(1)}</td>
              <td>
                <div className='count-area'>
                  <button className='minus' 
                   disabled={Basket.count==1}
                  onClick={()=>dispatch(decrement(Basket))}>-</button>
                  <span className='count'
                  >{Basket.count}</span>
                  <button className='plus' onClick={()=>dispatch(increment(Basket))}>+</button>
                </div>
              </td>
              <td>
                <Button variant="success" onClick={()=>dispatch(removeBasket(Basket))}>Remove</Button>
              </td>
            </tr>
          ))
        }
      </tbody>
      
    </Table>
    <div style={{display:"flex",justifyContent:"space-between",height:'40px'}}>
      <Button variant="danger" onClick={()=>dispatch(AllremoveBasket())}>AllRemove</Button>
    <p style={{padding:"20px",fontWeight:"600",fontSize:"20px"}}>Total:{total.toFixed(2)}</p>
    </div>
    
    </>
  );
}

export default Basket;

