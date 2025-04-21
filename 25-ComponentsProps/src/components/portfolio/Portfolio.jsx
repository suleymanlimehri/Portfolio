import React from 'react'
import './Portfolio.css'
const Portfolio = ({ image, title, desc }) => {
    return (
        <div className='portfolio'>
            <div className='ImagePortfo'><img src={image} alt="" className='portimage' /></div>
            <div className='plus-area'><span className='plus'>+</span></div>
            <div className='contentPortfo'>
                <h3 className='porftoTitle'>{title}</h3>
                <p className='portfoDesc'>{desc}</p>
                </div>

        </div>
    )
}

export default Portfolio
