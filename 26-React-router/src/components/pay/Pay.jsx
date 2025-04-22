import React from 'react'
import style from './Pay.module.css';
const Pay = ({ name, price,text, titles=[], button }) => {
    return (
      <div className={style.pay_card}>
        <h3 className={style.pay_name}>{name}</h3>
        <h1 className={style.pay_price}>{price}{text}</h1>
  
        <div className={style.title}>
          {titles.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
  
        <button className={style.btn}>{button}</button>
      </div>
    )
  }
  
  export default Pay
