import React from 'react'
import style from './Text.module.css';

const Text = () => {
    return (
        <div className={style.content}>
            <h1 className={style.title}>Present your business in a whole new way</h1>
            <p className={style.text}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
            <div className={style.btn}>
                <button className={style.getbtn}>Get Started</button>
                <button className={style.learnbtn}>Learn More</button>
            </div>

        </div>
    )
}

export default Text
