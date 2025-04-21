import React from 'react'
import './Service.css'
const Service = ({icon,name,desc}) => {
  return (
    <div className='service'>
        <div className='icon'>{icon}</div>
        <h3 className='servicestitle'>{name}</h3>
        <p className='desc'>{desc}</p>
        </div>
  )
}

export default Service
