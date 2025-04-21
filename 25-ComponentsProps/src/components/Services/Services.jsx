import React from 'react'
import './Services.css'
import Service from '../service/Service'
import { FaCartShopping } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";
import { FaLock } from "react-icons/fa6";
const Services = () => {
  let services = [
    {
      id: 1,
      name: "E-Commerces",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      image: <FaCartShopping />
    }, {
      id: 2,
      name: "Responsive Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      image: <GrPersonalComputer />
    },
    {
      id: 3,
      name: "Web Security",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      image: <FaLock />
    }
  ]
  return (
    <>  <div className='servicesContent'><h3 className="sertitle">SERVICES</h3>
        <em className='loremser'>Lorem ipsum dolor sit amet consectetur.</em></div>
    <div className='services-area'>
      

      {
        services.map((service) => (
          <Service
            key={service.id}
            icon={service.image}
            name={service.name}
            desc={service.description}
          />
        ))
      }
    </div></>

  )
}

export default Services
