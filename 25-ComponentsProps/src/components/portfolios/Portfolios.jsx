import React from 'react'
import Portfolio from "../portfolio/Portfolio"
import './Portfolios.css'
const Portfolios = () => {
    let portfolios = [
        {
            id: 1,
            image:"	https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg" ,
            title:"Threads",
            description: "Illustration"
            
        },
        {
            id: 2,
            image:"https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg" ,
            title:"Explore",
            description: "Graphic Design"
            
        },
        {
            id: 3,
            image:"https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg" ,
            title:"Finish",
            description: "Identity"
            
        },
        {
            id: 4,
            image:"https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg" ,
            title:"Lines",
            description: "Branding"
            
        },
        {
            id: 5,
            image:"	https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg" ,
            title:"Southwest",
            description: "Website Design"
            
        },
        {
            id: 6,
            image:"	https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg" ,
            title:"Window",
            description: "Photography"
            
        },
    ]
    return (
        <div className='portfolio-area'>
            {
                portfolios.map((item)=>(
                    <Portfolio
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    desc={item.description}
                    />
                    
                ))
            }
        </div>
    )
}

export default Portfolios
