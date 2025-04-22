import React from 'react'
import style from './Features.module.css';
import Feature from '../feature/Feature'
import { BsCollection } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { BsToggles2 } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";



const Features = () => {
  let featur = [{
    id: 1,
    image: <BsCollection />,
    title: "Featured title",
    description: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
    act: "Call to action",
    arrow: <FaArrowRight />

  },
  {
    id: 2,
    image: <BsBuildings />,
    title: "Featured title",
    description: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
    act: "Call to action",
    arrow: <FaArrowRight />


  },
  {
    id: 3,
    image: <BsToggles2 />,
    title: "Featured title",
    description: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
    act: "Call to action",
    arrow: <FaArrowRight />


  }
  ]
  return (
    <>
      <div className={style.features}>
        {
          featur.map((item) => (
            <Feature
              key={item.id}
              icon={item.image}
              title={item.title}
              desc={item.description}
              action={item.act}
              arr={item.arrow}
            />
          ))
        }
      </div>
    </>

  )
}

export default Features
