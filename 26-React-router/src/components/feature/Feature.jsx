import React from 'react'
import style from './Feature.module.css';
const Feature = ({ icon, title, desc, action, arr }) => {
  return (
    <div className={style.feature}>
      <div className={style.icon}>{icon}</div>
      <h2 className={style.title}>{title}</h2>
      <p className={style.desc}>{desc}</p>
      <div className={style.action}>
        <a href=''>{action}</a>
        <div className={style.arrow}>{arr}</div>
        </div>

    </div>

  )
}

export default Feature
