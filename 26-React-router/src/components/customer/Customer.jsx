import React from 'react'
import style from './Customer.module.css';
const Customer = ({ image, title, name }) => {
    return (
        <div className={style.customer_area}> 
            <div className={style.customer}>
            <div className={style.image}>{image}</div>
            <div className={style.content}>
                <p className={style.title}>{title}</p>
                <p className={style.name}>{name}</p>
            </div>
        </div>
            </div>
       
    )
}

export default Customer
