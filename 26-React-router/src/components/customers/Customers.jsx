import React from 'react'
import Customer from '../customer/Customer'
import style from './Customers.module.css';
import { BsChatRightQuoteFill } from "react-icons/bs";

const Customers = () => {
    let customer=[
        {
            id:1,
            image:<BsChatRightQuoteFill />,
            title:"Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!",
            name:"- Client Name, Location"

        },
        {
            id:2,
            image:<BsChatRightQuoteFill />,
            title:"The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!",
            name:"- Client Name, Location"

        }
    ]
  return (
    <div className={style.customers_area}>
      <div className={style.content}>
        <h2 className={style.title}>Customer testimonials</h2>
        <p className={style.paraqraf}>Our customers love working with us</p>
      </div>
      <div>
        {
            customer.map((item)=>(
                <Customer
                key={item.id}
                image={item.image}
                title={item.title}
                name={item.name}
                />
            ))
        }
      </div>
    </div>
  )
}

export default Customers
